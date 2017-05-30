import React from 'react';
import { Row, Col } from 'react-bootstrap';

import session from '@/services/session';
import api from '@/services/api';

class Login extends React.Component {

    signIn = (email, password) => {
        return api.authenticate('auth/jwt/login', email, password);
    }

    register = (client, user) => {
        let apiConfig = {
            headers: {
                'X-Related-Url': appConfig['setPasswordUrl']
            }
        };

        return api.post('register', {
            client,
            user
        }, apiConfig);
    }

    render() {
        return (
            <Row>
                <Col sm={12}>
                    Login page...
                </Col>
            </Row>
        );
    }
}

export default Login;
