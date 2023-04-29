import React from "react";

function CheckBox({ label, values, type, handleDataChange, errors }) {
    return (
        <div className="input-container">
            <label htmlFor={label}>
                {label}
                <span>*</span>
            </label>
            <div className="checkbox-container">
                {values?.map((value, index) => (
                    <div
                        key={index}
                        className="check-box"
                    >
                        <label htmlFor={value.toLowerCase()}>{value}</label>
                        <input
                            value={value}
                            type={type}
                            name={label}
                            id={value.toLowerCase()}
                            onChange={handleDataChange}
                        />
                    </div>
                ))}
            </div>
            <span className="error-message">{errors}</span>
        </div>
    );
}

export default CheckBox;
