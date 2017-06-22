import React from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'react-bootstrap';

import { signIn } from './actions';
import LoginForm from './components/LoginForm';

class Login extends React.Component {

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
