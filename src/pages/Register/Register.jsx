import React, { Fragment, useState } from "react";
import "./Register.css";
import { User } from "../../utils/user";

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let errors = {};
    if (!formData.firstName.trim()) {
      errors.firstName = "first name is required";
    }
    if (!formData.lastName.trim()) {
      errors.lastName = "last name is required";
    }
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Invalid email address";
    }
    if (!formData.phone.trim()) {
      errors.phone = "Phone number is required";
    } else if (!/^[0-9]+$/.test(formData.phone)) {
      errors.phone = "Invalid phone number";
    }
    if (!formData.password.trim() || formData.password.length <= 5) {
      errors.password = "Password must be greater than 5 characters";
    }
    if (
      !formData.confirmPassword.trim() ||
      formData.confirmPassword !== formData.password
    ) {
      errors.confirmPassword = "Password don't much";
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }
    const user = new User();
    user.create(formData);
    const err = user.errors;
    if (err) {
      setErrors({ email: err.email });
      return;
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  return (
    <Fragment>
      <div className="register">
        {/* show successful confirmation here */}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            {errors.firstName && <p className="error">{errors.firstName}</p>}
            <label htmlFor="firstName">FirstName:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            {errors.lastName && <p className="error">{errors.lastName}</p>}
            <label htmlFor="lastName">LastName:</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            {errors.email && <p className="error">{errors.email}</p>}
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            {errors.phone && <p className="error">{errors.phone}</p>}
            <label htmlFor="phone">Phone:</label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            {errors.password && <p className="error">{errors.password}</p>}
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            {errors.confirmPassword && (
              <p className="error">{errors.confirmPassword}</p>
            )}
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Register</button>
        </form>
      </div>
    </Fragment>
  );
};

export default Register;
