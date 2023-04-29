import React from "react";

function Select({ handleDataChange, label, value, options, errors }) {
    return (
        <div className="input-container">
            <label htmlFor={label}>
                {label}
                <span>*</span>
            </label>
            <select
                onChange={handleDataChange}
                name={label}
                value={value}
            >
                <option>select</option>
                {options?.map((option, index) => (
                    <option
                        key={index}
                        value={option}
                    >
                        {option}
                    </option>
                ))}
            </select>
            <span className="error-message">{errors}</span>
        </div>
    );
}

export default Select;
