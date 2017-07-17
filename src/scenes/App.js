import React from 'react';
import { object, node } from 'prop-types';

import { Grid } from 'react-bootstrap';

import appConfig from '@/config';
import Header from '@/components/Header';

class App extends React.Component {
    static contextTypes = {
        router: object
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

App.propTypes = {
    children: node
};

export default App;
