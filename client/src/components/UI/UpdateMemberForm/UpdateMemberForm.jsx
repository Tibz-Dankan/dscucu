import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import Typography from "@mui/material/Typography";
import { User } from "../../../utils/user";
import "./UpdateMemberForm.css";
import { useProfile } from "../../../context/ProfileContext";
import MasterLayout from "../../layouts/MasterLayout/MasterLayout";

const UpdateMemberForm = () => {
  const member = useProfile();

  const id = member.id;
  const user = new User().findById(id);

  const [formData, setFormData] = useState(user);

  const [errors, setErrors] = useState({});
  const [isSuccessful, setIsSuccessful] = useState(false);

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
    const updatedUsers = user.update(formData);
    const err = user.errors;

    if (err.id) {
      setErrors({ id: err.id });
      return;
    }
    if (err.email) {
      setErrors({ email: err.email });
      return;
    }
    setIsSuccessful(true);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  return (
    <MasterLayout title="Update profile">
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "70vh",
          maxWidth: "280px",
        }}
      >
        <Typography component="h1" variant="h6">
          Update Profile
        </Typography>
        {isSuccessful && (
          <Alert severity="success" sx={{ mt: 1 }}>
            Profile Updated successfully
          </Alert>
        )}
        {errors.id && (
          <Alert severity="error" sx={{ mt: 1 }}>
            {errors.id}
          </Alert>
        )}
        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          sx={{ mt: 1, fontSize: 16 }}
          maxWidth="xs"
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="firstName"
            label="FirstName"
            name="firstName"
            autoComplete="firstName"
            autoFocus
            onChange={handleChange}
            value={formData.firstName}
          />
          {errors.firstName && (
            <Alert severity="error">{errors.firstName}</Alert>
          )}

          <TextField
            margin="normal"
            required
            fullWidth
            id="lastName"
            label="Last Name"
            name="lastName"
            autoComplete="lastName"
            autoFocus
            onChange={handleChange}
            value={formData.lastName}
          />
          {errors.lastName && <Alert severity="error">{errors.lastName}</Alert>}

          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={handleChange}
            value={formData.email}
          />
          {errors.email && <Alert severity="error">{errors.email}</Alert>}

          <TextField
            margin="normal"
            required
            fullWidth
            id="phone"
            label="Phone Number"
            name="phone"
            autoComplete="phone"
            autoFocus
            onChange={handleChange}
            value={formData.phone}
          />
          {errors.phone && <Alert severity="error">{errors.phone}</Alert>}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, height: 48 }}
          >
            Update
          </Button>
        </Box>
      </Box>
    </MasterLayout>
  );
};

export default UpdateMemberForm;
