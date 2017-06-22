import React from 'react';
import classNames from 'classnames';
import DatePicker from 'react-datepicker';

import moment from 'moment';

class DatePickerInput extends React.Component {
    state = {
        controlId: "control-" + (Math.floor(Math.random() * 888888888888) + 111111111111)
    };

    onDateChange = (momentDate) => {
        let inputName = this.props.name || null;
        this.props.onChange(this.props.name, momentDate);
    };

    render() {
        const { label, labelClass,
                wrapInputClass, inputClass,
                error, touched,
                inputHelp, group,
                dateFormat, inputPlaceholder,
                selectedDate, onChange,
                ...inputProps } = this.props;

        let cssClasses = classNames({
            'form-group': (typeof group === 'undefined' || group) ? true : false,
            'has-error has-feedback': touched && error,
        });

        return (
            <div className={cssClasses}>
                {label ? <label htmlFor={this.state.controlId} className={labelClass}>{label}</label> : ""}
                <div className={wrapInputClass}>
                    <DatePicker
                        {...inputProps}
                        id={this.state.controlId}
                        className={inputClass}
                        dateFormat={dateFormat || 'DD/MM/YYYY'}
                        placeholderText={inputPlaceholder}
                        selected={selectedDate ? moment(selectedDate) : null}
                        onChange={this.onDateChange} />
                    {inputHelp && <span id="helpBlock" className="help-block">{inputHelp}</span>}
                    {touched && error && <span className="glyphicon glyphicon-remove form-control-feedback"></span>}
                    {touched && error && <span className="help-block has-error">{error}</span>}
                </div>
            </div>
        );
    }
}

export default DatePickerInput;
