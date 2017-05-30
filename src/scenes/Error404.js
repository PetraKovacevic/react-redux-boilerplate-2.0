import React from 'react';
import { strings, getString } from '../strings';

class Error404 extends React.Component {
    render() {
        return (
            <div>
                {getString(strings.error404Text)}
            </div>
        );
    }
}

export default Error404;
