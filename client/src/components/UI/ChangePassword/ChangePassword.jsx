import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import Typography from "@mui/material/Typography";
import MasterLayout from "../../layouts/MasterLayout/MasterLayout";
import { Auth } from "../../../utils/auth";
import { User } from "../../../utils/user";
import "./ChangePassword.css";

const ChangePassword = () => {
  const id = new Auth().user().id;
  const user = new User().findById(id);

  user.currentPassword;
  user.newPassword = "";
  user.confirmPassword = "";

  const [formData, setFormData] = useState(user);

  const [errors, setErrors] = useState({});
  const [isSuccessful, setIsSuccessful] = useState(false);

  const validate = () => {
    let errors = {};
    if (!formData.currentPassword.trim()) {
      errors.currentPassword = "Current password is a must";
    }
    if (!formData.newPassword.trim()) {
      errors.newPassword = "New password is a must";
    }
    if (formData.newPassword.length <= 5) {
      errors.newPassword = "Password must be greater than 5 characters";
    }
    if (!formData.confirmPassword.trim()) {
      errors.confirmPassword = "Confirm password is a must";
    }
    if (formData.confirmPassword !== formData.newPassword) {
      errors.confirmPassword = "Passwords don't much";
    }
    if (formData.currentPassword !== formData.password) {
      errors.currentPassword = "Incorrect current password";
    }
    if (formData.newPassword === formData.password) {
      errors.currentPassword = "New password is the same as current password";
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

    if (err?.id) {
      setErrors({ id: err.id });
    }

    setIsSuccessful(true);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  return (
    <MasterLayout title="Change Password">
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
          Change password
        </Typography>
        {isSuccessful && (
          <Alert severity="success" sx={{ mt: 1 }}>
            Password changed successfully
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
            name="currentPassword"
            label="Current Password"
            type="password"
            id="currentPassword"
            autoComplete="current-password"
            onChange={handleChange}
          />
          {errors.currentPassword && (
            <Alert severity="error">{errors.currentPassword}</Alert>
          )}
          <TextField
            margin="normal"
            required
            fullWidth
            id="newPassword"
            label="New Password"
            type="password"
            name="newPassword"
            autoComplete="newPassword"
            autoFocus
            onChange={handleChange}
          />
          {errors.newPassword && (
            <Alert severity="error">{errors.newPassword}</Alert>
          )}
          <TextField
            margin="normal"
            required
            fullWidth
            id="newPassword"
            label="Confirm Password"
            type="password"
            name="confirmPassword"
            autoComplete="confirmPassword"
            autoFocus
            onChange={handleChange}
          />
          {errors.confirmPassword && (
            <Alert severity="error">{errors.confirmPassword}</Alert>
          )}
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

export default ChangePassword;
