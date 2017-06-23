import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';

class Dashboard extends React.Component {
    render() {
        return (
            <Row>
                <Col sm={12}>
                    This is your dashboard.
                    It's the best dashboard ever.
                    You can do so much stuff from here.
                </Col>
            </Row>
        );
    }
}

export default Dashboard;