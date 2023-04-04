import React, { useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import Typography from "@mui/material/Typography";
import { CardContent, CardActions } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { User } from "../../../utils/user";
import "./DeleteMemberForm.css";
import { useProfile } from "../../../context/ProfileContext";
import MasterLayout from "../../layouts/MasterLayout/MasterLayout";

const DeleteMemberForm = () => {
  const member = useProfile();
  const id = member.id;

  const [errors, setErrors] = useState({});
  const [isSuccessful, setIsSuccessful] = useState(false);

  const day = (dateParam) => {
    if (!dateParam) {
      const defaultDate = new Date("2023-04-03T12:05:50.000Z");
      return defaultDate.toDateString();
    }
    const date = new Date(dateParam);
    return date.toDateString(); // provides format  -> Sun Jul 03 2022;
  };

  const time = (dateParam) => {
    if (!dateParam) {
      const defaultDate = new Date("2023-04-03T14:00:00.000Z");
      return defaultDate.toLocaleTimeString("en-Us", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      });
    }
    const date = new Date(dateParam);
    //provides format  -> 3:47 AM
    return date.toLocaleTimeString("en-Us", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
  };

  const handleDelete = (e) => {
    e.preventDefault();

    const user = new User();
    user.delete(id); //deleting member
    const err = user.errors;

    if (err.id) {
      setErrors({ id: err.id });
      return;
    }
    setIsSuccessful(true);
  };

  return (
    <MasterLayout title="Delete Member">
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
        {!isSuccessful && (
          <Alert severity="warning" sx={{ mt: 1 }}>
            Please note that deleting a member is a permanent action can not be
            reversed!
          </Alert>
        )}

        {isSuccessful && (
          <Alert severity="success" sx={{ mt: 1 }}>
            Member deleted successfully
          </Alert>
        )}
        {errors.id && (
          <Alert severity="error" sx={{ mt: 1 }}>
            {errors.id}
          </Alert>
        )}
        {!isSuccessful && (
          <Box
            component="form"
            onSubmit={handleDelete}
            noValidate
            sx={{ mt: 1, fontSize: 16 }}
            maxWidth="xs"
          >
            <Box
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                // bgcolor: "#f1f3f5",
              }}
            >
              <IconButton color="inherit">
                <AccountCircleIcon
                  style={{
                    width: "60px",
                    height: "60px",
                    color: "#868e96",
                  }}
                />
              </IconButton>
              <CardContent sx={{ flexGrow: 1, textAlign: "center" }}>
                <Typography gutterBottom variant="h6" component="h2">
                  {member.firstName} {member.lastName}
                </Typography>
                <Typography>{member.email}</Typography>
                <Typography>{member.phone}</Typography>
                <Typography>
                  Member since {day(member.createdAt)} {time(member.createdAt)}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2, height: 48 }}
                  style={{
                    backgroundColor: "hsl(0, 100%, 40%)",
                  }}
                >
                  Delete member
                </Button>
              </CardActions>
            </Box>
          </Box>
        )}
      </Box>
    </MasterLayout>
  );
};

export default DeleteMemberForm;
