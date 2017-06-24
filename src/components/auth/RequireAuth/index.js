import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { browserHistory } from 'react-router';

import _ from 'lodash';

import * as session from '@/services/session';
import * as userStorage from '@/data/users/services/storage';
import { redirect } from '@/services/redirect';
import { redirects } from '@/config';

import {
    unauthenticate,
    refreshToken,
    startRefreshingToken,
    stopRefreshingToken,
    authSuccess
} from '@/services/session/actions';

import { updateCurrentUserDetails } from '@/data/users/actions';

export default function (ComposedComponent) {
    class Authentication extends React.Component {
        componentWillMount() {
            // First check if we are authenticated in redux
            if (this.props.authenticated) {
                return;
            }

            // If we are not authenticated in redux (page refresh), check storage.
            // If token exists, update application state.
            if (session.isAuthenticated()) {
                const token = session.getToken();
                const user = userStorage.getCurrentUser();

                // todo: if the user doesn't exist in storage you might want to fetch the details again

                this.props.authSuccess(token);

                // Update the user details from local storage to redux
                this.props.updateCurrentUserDetails(user);

                // Refreshes the token
                this.refreshToken();
            } else {
                this.props.unauthenticate();
                redirect(redirects.unathenticated);
            }
        }

        componentWillUpdate(nextProps) {
            // If the user is not authenticated, there is no token or the token is invalid, sign out the user and redirect
            // to the sign in page
            if (!nextProps.authenticated || !session.isAuthenticated()) {
                this.props.unauthenticate();
                redirect(redirects.unathenticated);
                return;
            }

            // On path change check if the token needs to be refreshed
            if (!_.isEqual(nextProps.location.pathname, this.props.location.pathname)) {
                this.refreshToken()
                    .then(response => { })
                    .catch(error => { });
            }
        }

        refreshToken = () => {
            return new Promise((resolve, reject) => {

                const token = session.getToken();

                // Request a token refresh, but only if a request has not been sent yet
                if (!this.props.isRefreshingToken && session.shouldRefreshToken(token)) {
                    // Sets isRefreshingToken to true
                    this.props.startRefreshingToken();

                    session.refreshToken()
                        .then(response => {
                            // Save new token to local storage
                            session.setToken(response.data.token);

                            // Sets isRefreshingToken to false
                            this.props.stopRefreshingToken();

                            // Resolve the promise
                            resolve("Refresh Token Success");
                        })
                        .catch(error => {
                            // Sets isRefreshingToken to false
                            this.props.stopRefreshingToken();

                            // Reject the promise
                            reject(error);
                        });
                } else {
                    resolve("Token does not need to be refreshed");
                }
            });
        };

        render() {
            return this.props.authenticated && !this.props.isRefreshingToken
                ? <ComposedComponent {...this.props} />
                : null
            ;
        }
    }

    const mapStateToProps = state => {
        return {
            authenticated: state.services.session.authenticated,
            isRefreshingToken: state.services.session.isRefreshingToken
        };
    };

    const mapDispatchToProps = (dispatch) => {
        return {
            updateCurrentUserDetails: (user) => {
                dispatch(updateCurrentUserDetails(user));
            },
            unauthenticate: () => {
                dispatch(unauthenticate());
            },
            startRefreshingToken: () => {
                dispatch(startRefreshingToken());
            },
            stopRefreshingToken: () => {
                dispatch(stopRefreshingToken());
            },
            authSuccess: (token) => {
                dispatch(authSuccess(token));
            }
        };
    };

    return connect(mapStateToProps, mapDispatchToProps)(Authentication);
}
