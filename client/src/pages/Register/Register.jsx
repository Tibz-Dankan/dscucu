import React, { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Alert from "@mui/material/Alert";
import { User } from "../../utils/user";
import { Card, CardContent, CardActions } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { confirmEmail } from "../../API/email";
import "./Register.css";

import Footer from "../../components/layouts/Footer/Footer";

export default function Register() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [isRegistered, setIsRegistered] = useState(false);
  const [registeredUser, setRegisteredUser] = useState({});
  const [emailConfirmation, setEmailConfirmation] = useState({});

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
      errors.confirmPassword = "Passwords don't much";
    }
    return errors;
  };

  const clearFormData = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
    });
  };

  // validating  error here
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }
    const user = new User();
    const newUser = user.create(formData);
    const err = user.errors;
    if (err?.email) {
      setErrors({ email: err.email });
      return;
    }
    setRegisteredUser(newUser);
    setIsRegistered(true);
    clearFormData();

    const emailconfirm = await confirmEmail(newUser);
    if (emailconfirm.error) {
      setEmailConfirmation(emailconfirm.error);
    }
    if (emailconfirm.data) {
      setEmailConfirmation(emailconfirm.data);
    }
  };

  // handle from on change event
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  return (
    <Container component="main" maxWidth="xs" className="register">
      <CssBaseline />
      <AppBar className="register-nav">
        <Toolbar
          style={{
            display: "flex",
            justifyContent: "space-between",
            paddingLeft: "36px",
            paddingRight: "36px",
          }}
        >
          <Typography
            variant="h6"
            style={{ fontWeight: "bold", fontSize: "24px" }}
          >
            DSC_UCU
          </Typography>
          <div>
            <Link
              href="/"
              style={{
                marginRight: "10px",
                color: "#fff",
                textDecoration: "none",
                cursor: "pointer",
              }}
            >
              Home
            </Link>
          </div>
        </Toolbar>
      </AppBar>
      <Box
        sx={{
          marginTop: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingTop: 8,
        }}
      >
        <Avatar sx={{ m: 1, mt: 3, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Register
        </Typography>
        {isRegistered && (
          <Card
            sx={{
              mt: 1,
              fontSize: 16,
              height: "100%",
              display: "flex",
              flexDirection: "column",
              bgcolor: "#f1f3f5",
            }}
          >
            <CardContent sx={{ flexGrow: 1 }}>
              {emailConfirmation.error && (
                <Alert severity="error">{emailConfirmation.message}</Alert>
              )}
              {emailConfirmation.data && (
                <Alert severity="success">{emailConfirmation.message}</Alert>
              )}
              <Alert severity="success">You have registered successfully</Alert>

              <Typography gutterBottom variant="h5" component="h3">
                Registration Details
              </Typography>
              <Typography>FirstName: {registeredUser.firstName}</Typography>
              <Typography>LastName: {registeredUser.lastName}</Typography>
              <Typography>Email: {registeredUser.email}</Typography>
              <Typography>PhoneNumber: {registeredUser.phone}</Typography>
              <Typography>Password: {registeredUser.password}</Typography>
            </CardContent>
            <CardActions>
              <Button size="small">
                <Link
                  href="login"
                  style={{
                    backgroundColor: "#228be6",
                    color: "#fff",
                    textDecoration: "none",
                    borderRadius: "4px",
                    padding: "4px 16px",
                  }}
                >
                  LogIn
                </Link>
              </Button>
            </CardActions>
          </Card>
        )}
        {!isRegistered && (
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1, fontSize: 16 }}
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
            />
            {errors.lastName && (
              <Alert severity="error">{errors.lastName}</Alert>
            )}

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
            />
            {errors.phone && <Alert severity="error">{errors.phone}</Alert>}

            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={handleChange}
            />
            {errors.password && (
              <Alert severity="error">{errors.password}</Alert>
            )}

            <TextField
              margin="normal"
              required
              fullWidth
              id="confirmPassword"
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

            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, height: 48 }}
            >
              Register
            </Button>
            <Grid container>
              <Grid item>
                <Link href="/login" variant="body2">
                  {"Already have an account? Log In"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        )}
      </Box>

      {/* Footer */}
      <Footer />
      {/* End footer */}
    </Container>
  );
}
