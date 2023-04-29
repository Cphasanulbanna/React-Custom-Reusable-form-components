import React from "react";

function Input({ formData, handleDataChange, errors, type, name }) {
    return (
        <div className="input-container">
            <label htmlFor={name}>
                {name.split(/(?=[A-Z])/).join(" ")}
                <span>*</span>
            </label>
            <input
                id={name}
                name={name}
                value={formData?.name}
                type={type}
                onChange={handleDataChange}
                placeholder={name.split(/(?=[A-Z])/).join(" ")}
            />
            <span className="error-message">{errors}</span>
        </div>
    );
}

export default Input;
