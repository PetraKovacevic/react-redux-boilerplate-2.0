import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { browserHistory } from 'react-router';

import _ from 'lodash';

import * as session from '@/services/session';
import { redirect } from '@/services/redirect';

import {
    unauthenticate,
    refreshToken,
    startRefreshingToken,
    stopRefreshingToken
} from '@/services/session/actions';

import { updateSignedInUserDetails } from '@/data/users/actions';

import { redirects } from '@/config';

const getCurrentUserDetails = () => {
    return JSON.parse(localStorage.getItem('currentUserDetails'));
};

export default function(ComposedComponent) {
    class Authentication extends React.Component {
        static contextTypes = {
            router: PropTypes.object
        };

        componentWillMount() {
            if (!this.props.authenticated) {
                debugger;
                // If token exists, update application state
                const token = session.getToken();
                const user = getCurrentUserDetails();

                if ( token && session.isTokenValid(token) && user ) {
                    // Update the user details from local storage to redux
                    this.props.updateSignedInUserDetails(user);

                    // Refreshes the token
                    this.refreshToken();
                } else {
                    this.props.unauthenticate();
                    redirect(redirects.unathenticate);
                }
            }
        }

        componentWillUpdate(nextProps) {
            // If the user is not authenticated, there is no token or the token is invalid, sign out the user and redirect
            // to the sign in page
            if (!nextProps.authenticated || !session.getToken() || !session.isTokenValid()) {
                this.props.unauthenticate();
                redirect(redirects.unathenticate);
                return;
            }

            // On path change check if the token needs to be refreshed
            if (!_.isEqual(nextProps.location.pathname, this.props.location.pathname)) {
                this.refreshToken()
                    .then( response => {})
                    .catch( error => {});
            }
        }

        refreshToken = () => {
            return new Promise((resolve, reject) => {
                // Request a token refresh, but only if a request has not been sent yet
                if (!this.props.isRefreshingToken && session.shouldRefreshToken()) {
                    // Sets isRefreshingToken to true
                    this.props.startRefreshingToken();

                    session.refreshToken()
                        .then(response => {
                            // Save new token to local storage
                            localStorage.setItem('token', response.data.token);

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
            return (
                <div>

                    { // Don't render component if token is being refreshed
                        this.props.authenticated && !this.props.isRefreshingToken
                        ? <ComposedComponent {...this.props} />
                        : null
                    }
                </div>
            );
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
            updateSignedInUserDetails: (user) => {
                dispatch(updateSignedInUserDetails(user));
            },
            unauthenticate: () => {
                dispatch(unauthenticate());
            },
            startRefreshingToken: () => {
                dispatch(startRefreshingToken());
            },
            stopRefreshingToken: () => {
                dispatch(stopRefreshingToken());
            }
        };
    };

    return connect(mapStateToProps, mapDispatchToProps)(Authentication);
}
