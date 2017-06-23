import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { func, bool } from 'prop-types';
import { strings, getString } from '@/strings';
import InputField from '@/components/form/Input';

import { createValidator, required } from '@/utils/validation';

const signInValidation = createValidator({
    username: [required],
    password: [required]
});

class LoginForm extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit} >
                <div>
                    <Field
                        placeholder='Username'
                        name="username"
                        component={ InputField }
                        type="text"
                        label={ getString(strings.usernameLabel) }
                    />
                </div>
                <div>
                    <Field
                        name="password"
                        component={ InputField }
                        type="password"
                        label={ getString(strings.passwordLabel) } />
                </div>
                <div>
                    <button type="submit" disabled={this.props.disableButton}>Login</button>
                </div>
            </form>
        );
    }
}

LoginForm.defaultProps = {
    disableButton: false
};

LoginForm.propTypes = {
    handleSubmit: func.isRequired,
    disableButton: bool
};

export default reduxForm({
    form: 'signIn',
    validate: signInValidation
})(LoginForm);
