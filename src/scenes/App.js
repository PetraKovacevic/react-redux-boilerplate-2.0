import PropTypes from 'prop-types';
import React from 'react';

import { Grid } from 'react-bootstrap';

import appConfig from '@/config';
import Header from '@/components/Header';

class App extends React.Component {
    static contextTypes = {
        router: PropTypes.object
    };

    renderChildren = () => {
        return this.props.children;
    };

    render() {
        return (
            <Grid>
                <Header title={this.props.children ? this.props.children.props.route.title : ''} />
                {this.renderChildren()}
            </Grid>
        );
    }
}

export default App;
