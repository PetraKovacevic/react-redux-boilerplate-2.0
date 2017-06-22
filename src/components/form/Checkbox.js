import React from 'react';
import classNames from 'classnames';

class CheckboxField extends React.Component {
    state = {
        controlId: "control-" + (Math.floor(Math.random() * 888888888888) + 111111111111)
    };

    componentDidMount() {
        this.triggerAllCheck(this.props);
    }

    componentDidUpdate(props) {
        this.triggerAllCheck(props);
    }

    triggerAllCheck = (props) => {
        let el = document.getElementById(this.state.controlId);
        if (props['data-trigger-check']) {
            if (!!el.checked === false && !!el.disabled === false && props['data-permission-name'] !== 'All') {
                el.click();
            }
            if (props['data-permission-name'] !== 'All') { el.disabled = true; }
        } else {
            el.disabled = false;
        }
    };

    render() {
        const {label, labelClass, error, touched, inputHelp, group, ...inputProps} = this.props;

        let cssClasses = classNames({
            'form-group': (typeof group === 'undefined' || group) ? true : false,
            'has-error has-feedback': touched && error,
        });

        return (
            <div className={cssClasses}>
                <input {...inputProps} id={this.state.controlId} type="checkbox" />
                <label htmlFor={this.state.controlId} className={labelClass}>
                    <span></span>
                    <span className="label-text-checkbox">{label}</span>
                </label>
                {touched && error && <span className="glyphicon glyphicon-remove form-control-feedback"></span>}
                {touched && error && <span className="help-block has-error">{error}</span>}
            </div>
        );
    }
}

export default CheckboxField;
