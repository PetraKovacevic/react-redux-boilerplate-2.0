export const strings = {

    // General application strings
    applicationTitle: 'React Boilerplate',
    error404Text: 'Page not found...',

    // Login / Sign-up
    loginButton: 'Log in',
    logoutButton: 'Log out',
    registerButton: 'Register',
    resetPassword: 'Reset my password',
    loginPageHeading: 'Login',
    usernameLabel: 'Username',
    passwordLabel: 'Password',
    passwordUpdated: 'Your password has been successfully updated',
    registerAccountTitle: 'Register a new account',
    signInButton: 'Sign in',
    createAccountButton: 'Create account',
    companyNameLabel: 'Company name',
    firstNameLabel: 'First name',
    lastNameLabel: 'Last name',
    emailLabel: 'Email',

    // User details
    userDetailsTitle: 'My Details',

    // Validation
    emailError: 'Must be a valid email address',
    requiredValue: 'Field is required'
};

import appConfig from './config';
const language = appConfig.language;

export function getString(key) {
    // In future, we can do language things here
    // For now, we'll just return the string
    return key.toString();
}
