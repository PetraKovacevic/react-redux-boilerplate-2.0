import React from 'react';
import { Row, Col } from 'react-bootstrap';

class Home extends React.Component {
    render() {
        return (
            <Row>
                <Col sm={12}>
                    Home Page... this will have its own components plus some shared ones
                </Col>
            </Row>
        );
    }
}

export default Home;
