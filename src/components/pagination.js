import React from 'react';
import Paginator from 'react-pagify';
import pagifyBootstrapPreset from 'react-pagify-preset-bootstrap';
import segmentize from 'segmentize';

class Pagination extends React.Component {
    render() {
        let {labels, pagination, onSelect, className, ...props} = this.props;

        if (isNaN(pagination.page) || isNaN(pagination.pages)) {
            return (
                <div></div>
            );
        }

        let bootstrapPreset = { ...pagifyBootstrapPreset };
        if (className) {
            bootstrapPreset['className'] = bootstrapPreset['className'] + ' ' + className;
        }

        return (
            <Paginator.Context
                {...props}
                {...bootstrapPreset}
                segments={segmentize({
                    page: pagination.page,
                    pages: pagination.pages,
                    beginPages: 4,
                    endPages: 4,
                    sidePages: 2
                })} onSelect={onSelect}>
                <Paginator.Button
                    className={pagination.page > 1 ? '' : 'disabled'}
                    page={pagination.page - 1}
                >
                    {labels.previous}
                </Paginator.Button>

                <Paginator.Segment field="beginPages" />

                <Paginator.Ellipsis previousField="beginPages" nextField="previousPages" />

                <Paginator.Segment field="previousPages" />
                <Paginator.Segment field="centerPage" className="active" />
                <Paginator.Segment field="nextPages" />

                <Paginator.Ellipsis previousField="nextPages" nextField="endPages" />

                <Paginator.Segment field="endPages" />

                <Paginator.Button
                    className={pagination.page + 1 < pagination.pages ? '' : 'disabled'}
                    page={pagination.page + 1}
                >
                    {labels.next}
                </Paginator.Button>
            </Paginator.Context>
        );
    }
}

Pagination.defaultProps = {
    labels: {
        previous:   'Previous',
        next:       'Next'
    }
};

export default Pagination;
