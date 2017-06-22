import React from 'react';
import classNames from 'classnames';

class InputField extends React.Component {
    state = {
        controlId: "control-" + (Math.floor(Math.random() * 888888888888) + 111111111111)
    };

    render() {
        const { className,
                label,
                type,
                labelClass,
                wrapInputClass,
                inputHelp,
                group,
                meta: { touched, error, warning },
                input } = this.props;

        input['type'] = type || 'text';

        let cssClasses = classNames({
            'form-group': (typeof group === 'undefined' || group) ? true : false,
            'has-error has-feedback': touched && error,
        });

        return (
            <div className={cssClasses}>
                {label ? <label htmlFor={this.state.controlId} className={labelClass}>{label}</label> : ""}
                <div className={wrapInputClass}>
                    <input {...input} id={this.state.controlId} className={className} />
                    {inputHelp && <span id="helpBlock" className="help-block">{inputHelp}</span>}
                    {touched && error && <span className="help-block has-error">{error}</span>}
                </div>
            </div>
        );
    }
}

export default InputField;
