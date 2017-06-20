import React from 'react';
import {Row, Col} from 'react-bootstrap';

import RegisterForm from './components/RegisterForm';

class Register extends React.Component {

    handleSubmit = () => {}

    render() {
        return (
            <Row>
                <Col sm={12}>
                    <RegisterForm handleSubmit={this.handleSubmit}/>
                </Col>
            </Row>
        );
    }
}

export default Register;
