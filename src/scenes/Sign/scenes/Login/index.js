import React from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'react-bootstrap';

import { signIn } from './actions';
import LoginForm from './components/LoginForm';

class Login extends React.Component {

    handleSubmit = (username, password) => {
        this.props.signIn(username, password);
    }

    render() {
        return (
            <Row>
                <Col sm={12}>
                    Login page... insert your imported form component here
                    <LoginForm handleSubmit={this.handleSubmit} />
                </Col>
            </Row>
        );
    }
}

const mapStateToProps = state => {
    return {
        isLoading: state.user
    };
};

const mapDispatchToProps = dispatch => {
    return {
        signIn: (username, password) => {
            dispatch(signIn(username, password));
        }
    };
};

export default connect(null, mapDispatchToProps)(Login);
