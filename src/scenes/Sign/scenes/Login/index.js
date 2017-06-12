import React from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'react-bootstrap';

import { signIn } from './actions';

class Login extends React.Component {

    state = {
        username: '',
        password: ''
    }

    login = () => {
        const { username, password } = this.state;
        this.props.signIn(username, password);
    }

    handleUsernameUpdate = event => {
        this.setState({
            username: event.target.value
        });
    }

    handlePasswordUpdate = event => {
        this.setState({
            password: event.target.value
        });
    }

    handleSubmit = () => {
        this.login();
    }

    render() {
        return (
            <Row>
                <Col sm={12}>
                    Login page... insert your imported form component here
                    <div>
                        <input type='text' placeholder='Username' value={this.state.username} onChange={this.handleUsernameUpdate} />
                    </div>
                    <div>
                        <input type='password'  value={this.state.password} onChange={this.handlePasswordUpdate} />
                    </div>
                    <div>
                        <button onTouchTap={this.handleSubmit}>Login</button>
                    </div>
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
