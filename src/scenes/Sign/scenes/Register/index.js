import React from 'react';
import { Row, Col } from 'react-bootstrap';

import RegisterForm from './components/RegisterForm';

class Register extends React.Component {

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
                    <RegisterForm />
                </Col>
            </Row>
        );
    }
}

export default Register;
