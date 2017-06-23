import React from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import { func, bool } from 'prop-types';

import { signIn } from './actions';
import LoginForm from './components/LoginForm';

import * as session from '@/services/session';
import { redirect } from '@/services/redirect';
import { redirects } from '@/config';

class Login extends React.Component {

    componentWillMount() {
        // If token exists, update application state
        if (session.isAuthenticated()) {
            redirect(redirects.authenticated);
        }
    }

    handleSubmit = (username, password) => {
        this.props.signIn(username, password);
    };

    render() {
        return (
            <Row>
                <Col sm={12}>
                    Login page... insert your imported form component here
                    <LoginForm onSubmit={this.handleSubmit} disableButton={this.props.isUserSigningIn} />
                </Col>
            </Row>
        );
    }
}

Login.defaultProps = {
    isUserSigningIn: false
};

Login.propTypes = {
    signIn: func.isRequired,
    isUserSigningIn: bool.isRequired
};

const mapStateToProps = state => {
    return {
        isUserSigningIn: state.sign.login.isUserSigningIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
        signIn: (username, password) => {
            dispatch(signIn(username, password));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
