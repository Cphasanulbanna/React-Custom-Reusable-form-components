import React from "react";

function Radio({ handleDataChange, errors, type, values, label }) {
    return (
        <div className="input-container">
            <label htmlFor="lastName">
                {label}
                <span>*</span>
            </label>
            <div className="gender">
                {values?.map((value, index) => (
                    <div key={index}>
                        <label htmlFor={value}>{value}</label>
                        <input
                            id={value}
                            name={label}
                            value={value}
                            type={type}
                            onChange={handleDataChange}
                        />
                    </div>
                ))}
            </div>
            <span className="error-message">{errors}</span>
        </div>
    );
}

export default Radio;
