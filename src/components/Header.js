import React from 'react';

import DocumentTitle from 'react-document-title';
import PageTitle from '@/utils/pageTitle';

class Header extends React.Component {
    render() {
        // TODO: @Steve: change this to use react-helmet
        return (
            <DocumentTitle title={PageTitle.title(this.props.title)} >
                <header className="container">
                    <div className="page-header">
                        <h1>{this.props.title || 'Default title because props were not passed...'}</h1>
                    </div>
                </header>
            </DocumentTitle>
        );
    }
}

export default Header;
