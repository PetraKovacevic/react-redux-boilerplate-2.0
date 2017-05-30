import PropTypes from 'prop-types';
import React from 'react';

class Notification extends React.Component {
    render() {
        return (
            <div className={`alert alert-dismissible alert-${this.props.type}`} role="alert">
                <button type="button" className="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span></button>
                <p className="text-center">{this.props.message}</p>
            </div>
        );
    }
}

Notification.defaultProps = {
    type: 'success',
    message: ''
};

Notification.propTypes = {
    type: PropTypes.oneOf(['success', 'warning', 'info']),
    message: PropTypes.string
};

export default Notification;
