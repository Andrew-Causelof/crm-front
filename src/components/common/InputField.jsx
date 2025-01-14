import React from 'react';
import PropTypes from 'prop-types';

export default function InputField({
    id,
    name,
    value,
    defaultValue,
    placeholder,
    onChange,
    disabled = false,
    type = 'text',
    className,
    readOnly = false,
    checked
}) {
    return (
        <input
            id={id}
            name={name}
            value={value}
            defaultValue={defaultValue}
            placeholder={placeholder}
            onChange={onChange}
            disabled={disabled}
            type={type}
            className={className}
            readOnly={readOnly}
            checked={checked}
        />
    );
}

InputField.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
    defaultValue: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
    disabled: PropTypes.bool,
    type: PropTypes.string,
    className: PropTypes.string,
    readOnly: PropTypes.bool,
    checked: PropTypes.bool
};
