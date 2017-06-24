import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { bool } from 'prop-types';

import { unauthenticate } from '@/services/session/actions';
import { redirect } from '@/services/redirect';
import { redirects } from '@/config';
import * as userStorage from '@/data/users/services/storage';

const signOut = props => {
    props.unauthenticate();
    userStorage.removeCurrentUser();
    redirect(redirects.unathenticated);
};

export const LogOutButton = props => {
    return props.authenticated ? <Button onTouchTap={() => { signOut(props); }} >Log Out</Button> : null;
};

LogOutButton.propTypes = {
    authenticated: bool
};

const mapStateToProps = (state) => {
    return {
        authenticated: state.services.session.authenticated
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        unauthenticate: () => {
            dispatch(unauthenticate());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LogOutButton);
