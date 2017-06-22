import React from 'react';

import _ from 'lodash';
import classNames from 'classnames';

class SelectField extends React.Component {
    state = {
        controlId: 'control-' + (Math.floor(Math.random() * 888888888888) + 111111111111)
    };

    renderOptions = (
        valuePropName = 'value',
        displayPropName = 'name',
        emptyOptionDisplayText = 'Please select',
        includeEmptyOption = true,
    ) => {
        // clone the options array
        let options = [].concat(this.props.options);
        let firstOption = {};

        if (includeEmptyOption) {
            firstOption[valuePropName] = '';
            firstOption[displayPropName] = emptyOptionDisplayText;
            options.unshift(firstOption);
        }

        return _.map(options, (option, key) => {
            return (
                <option key={key} value={option[valuePropName]}>{option[displayPropName]}</option>
            );
        });
    };

    render() {
        const {
            label,
            labelClass,
            wrapInputClass,
            inputHelp,
            optionsValuePropName,
            optionsDisplayPropName,
            includeEmptyOption,
            emptyOptionDisplayText,
            group,
            meta: { touched, error, warning },
            options,
            input } = this.props;

        let cssClasses = classNames({
            'form-group': (typeof group === 'undefined' || group) ? true : false,
            'has-error has-feedback': touched && error,
        });

        return (
            <div className={cssClasses}>
                {label ? <label htmlFor={this.state.controlId} className={labelClass}>{label}</label> : ""}
                <div className={wrapInputClass}>
                    <select id={this.state.controlId} value={input.value} {...input}>
                        {this.renderOptions(optionsValuePropName, optionsDisplayPropName, emptyOptionDisplayText, includeEmptyOption)}
                    </select>
                    {inputHelp && <span id="helpBlock" className="help-block">{inputHelp}</span>}
                    {touched && error && <span className="glyphicon glyphicon-remove form-control-feedback"></span>}
                    {touched && error && <span className="help-block has-error">{error}</span>}
                </div>
            </div>
        );
    }
}

export default SelectField;
