import React from 'react';
import { Row, Col } from 'react-bootstrap';

import sample from './img/sample.png';
import './styles.scss';

class Home extends React.Component {
    render() {
        return (
            <Row>
                <Col sm={12}>
                    Home Page... this will have its own components plus some shared ones.
                </Col>
                <Col sm={12}>
                    This is how images work: <img src={sample} />
                </Col>
            </Row>
        );
    }
}

export default Home;
