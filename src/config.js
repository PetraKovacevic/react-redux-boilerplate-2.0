const config = {
    appName: 'React BoilerPlate',
    language: 'en', // en, es, fr, de, etc... Found in strings.js
    pageTitleSeparator: ' | ',
    apiEndpoint: 'http://fill-me-in.com',
    jwtType: 'aws_cognito',
    awsUserPoolId: 'ap-southeast-2_Dw7s9JN9Q',
    awsClientId: '22j045c5blmrg4ibsgfdrp0u58',
    defaultRedirect: '/my-details',
    spinnerConfig: {
        lines: 11,
        length: 20,
        width: 20,
        radius: 6,
        scale: 0.75,
        color: 'rgba(0, 151, 191 .25)',
        speed: 1,
        className: 'spinner',
        hwaccell: true,
        top: '40%'
    }
};

export default config;
