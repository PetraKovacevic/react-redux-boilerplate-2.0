import React from 'react';
import { func } from 'prop-types';

class LoginForm extends React.Component {

    constructor(props) {
        super(props);
    }

    state = {
        username: '',
        password: ''
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

    submit = () => {
        const { username, password } = this.state;
        this.props.handleSubmit(username, password);
    }

    render() {
        return (
            <div>
                <div>
                    <input
                        type='text'
                        placeholder='Username'
                        value={this.state.username}
                        onChange={this.handleUsernameUpdate}
                    />
                </div>
                <div>
                    <input
                        type='password'
                        value={this.state.password}
                        onChange={this.handlePasswordUpdate}
                    />
                </div>
                <div>
                    <button onTouchTap={this.submit}>Login</button>
                </div>
            </div>
        );
    }
}

LoginForm.propTypes = {
    handleSubmit: func.isRequired
};


export default LoginForm;
