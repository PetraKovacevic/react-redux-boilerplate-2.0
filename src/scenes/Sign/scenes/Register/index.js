import React from 'react';
import { Row, Col } from 'react-bootstrap';

import RegisterForm from './components/RegisterForm';

class Login extends React.Component {
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

export default Login;
