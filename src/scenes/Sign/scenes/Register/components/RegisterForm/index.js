import React from 'react';
import { func } from 'prop-types';
import { Row, Col } from 'react-bootstrap';

class RegisterForm extends React.Component {
    render() {
        return (
            <Row>
                <Col sm={12}>
                    I am a form:
                    <input
                        type='text'
                        placeholder='Some placeholder...'
                    />
                    see?
                </Col>
            </Row>
        );
    }
}

RegisterForm.propTypes = {
    handleSubmit: func.isRequired
};

export default RegisterForm;
