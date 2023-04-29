import React, { useState } from "react";

//css
import "./form.css";

//reusable components
import Input from "../Input";
import Radio from "../Radio";
import Select from "../Select";
import CheckBox from "../CheckBox";

function Form() {
    //form fields state
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        gender: "",
        dob: "",
        place: "",
        country: "",
        skills: [],
    });

    //error message state
    const [errors, setErrors] = useState({
        firstName: "",
        lastName: "",
        email: "",
        gender: "",
        dob: "",
        place: "",
        country: "",
        skills: "",
    });

    console.log(formData);

    //input data storing & validating function
    const handleDataChange = (e) => {
        const { name, value, checked } = e.target;
        //storing input data to state

        if (name === "skills") {
            if (checked) {
                setFormData((prev) => ({
                    ...prev,
                    skills: [...prev.skills, value],
                }));
            } else {
                setFormData((prev) => ({
                    ...prev,
                    skills: prev.skills.filter((skill) => skill !== value),
                }));
            }
        } else {
            setFormData((prev) => ({ ...prev, [name]: value }));
        }

        //validating fields while changing input
        if (value === "") {
            setErrors({ ...errors, [name]: `${name} is required` });
        } else {
            setErrors({ ...errors, [name]: "" });
        }

        //additional validation for email
        if (name === "email" && value !== "") {
            if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value)) {
                setErrors({ ...errors, [name]: "Invalid mail" });
            }
        }
    };

    //validating all fields when form submitted
    const validateFields = () => {
        const keys = Object.keys(formData);
        keys.map((key) => {
            if (formData[key] === "") {
                setErrors((prev) => ({ ...prev, [key]: `${key} is required` }));
            } else {
                setErrors((prev) => ({ ...prev, [key]: "" }));
            }

            //checking if email is valid when field is not empty
            if (key === "email") {
                if (
                    formData[key] !== "" &&
                    !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData[key])
                ) {
                    setErrors((prev) => ({ ...prev, [key]: "invalid email" }));
                }
            }

            //checkbox validation
            if (key === "skills") {
                if (formData[key].length === 0) {
                    setErrors((prev) => ({ ...prev, [key]: `${key} is required` }));
                }
            }
        });
    };

    //form submission function
    const handleFormSubmit = (e) => {
        e.preventDefault();
        validateFields();
    };

    return (
        <section className="main-container">
            <form onSubmit={handleFormSubmit}>
                <Input
                    formData={formData}
                    handleDataChange={handleDataChange}
                    errors={errors.firstName}
                    type={"text"}
                    name="firstName"
                />
                <Input
                    formData={formData}
                    handleDataChange={handleDataChange}
                    errors={errors.lastName}
                    type={"text"}
                    name="lastName"
                />
                <Input
                    formData={formData}
                    handleDataChange={handleDataChange}
                    errors={errors.email}
                    type={"email"}
                    name="email"
                />
                <Radio
                    label={"gender"}
                    values={["male", "female"]}
                    type={"radio"}
                    errors={errors.gender}
                    handleDataChange={handleDataChange}
                />
                <Input
                    formData={formData}
                    handleDataChange={handleDataChange}
                    errors={errors.dob}
                    type={"date"}
                    name="dob"
                />
                <Input
                    formData={formData}
                    handleDataChange={handleDataChange}
                    errors={errors.place}
                    type={"text"}
                    name="place"
                />
                <Select
                    handleDataChange={handleDataChange}
                    label={"country"}
                    errors={errors.country}
                    options={["UAE", "INDIA", "KSA", "UK", "USA"]}
                />

                <CheckBox
                    values={["React", "Js", "Python", "Angular", "Css"]}
                    errors={errors.skills}
                    label={"skills"}
                    type={"checkbox"}
                    handleDataChange={handleDataChange}
                />
                <button type="submit">submit</button>
            </form>
        </section>
    );
}

export default Form;
