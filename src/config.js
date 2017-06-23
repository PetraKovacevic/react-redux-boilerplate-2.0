/**
 * Global application config
 * Other configurations will live with their components / services
 */

export const redirects = {
    loginSuccess: '/dashboard',
    unathenticate: '/login'
};

const config = {
    appName: 'React BoilerPlate',
    language: 'en', // en, es, fr, de, etc... Found in strings.js
    pageTitleSeparator: ' | ',
};

export default config;

