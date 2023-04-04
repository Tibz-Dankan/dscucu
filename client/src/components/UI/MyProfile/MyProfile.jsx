import React from "react";
import MasterLayout from "../../layouts/MasterLayout/MasterLayout";
import {
  Box,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import { Auth } from "../../../utils/auth";
import { User } from "../../../utils/user";

const MyProfile = () => {
  const id = new Auth().user().id;
  const user = new User().findById(id);

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

  return (
    <MasterLayout title="My Profile">
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "70vh",
        }}
      >
        <Box
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            // bgcolor: "#f1f3f5",
            minWidth: "180px",
          }}
        >
          <Typography variant="h6" component="h2" sx={{ mb: 3 }}>
            My profile
          </Typography>

          <IconButton color="inherit">
            <AccountCircleIcon
              style={{
                width: "60px",
                height: "60px",
                color: "#868e96",
              }}
            />
          </IconButton>
          <CardContent
            sx={{
              flexGrow: 1,
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography gutterBottom variant="h6" component="h2">
              {user.firstName} {user.lastName}
            </Typography>
            <Typography>{user.email}</Typography>
            <Typography>{user.phone}</Typography>
            <Typography>
              Member since {day(user.createdAt)} {time(user.createdAt)}
            </Typography>
            <CardActions>
              <Button size="small" sx={{ alignSelf: "center" }}>
                <Link
                  to="update-profile"
                  style={{
                    backgroundColor: "#228be6",
                    color: "#fff",
                    textDecoration: "none",
                    borderRadius: "4px",
                    padding: "4px 16px",
                  }}
                >
                  Edit Profile
                </Link>
              </Button>
            </CardActions>
          </CardContent>
        </Box>
      </Box>
    </MasterLayout>
  );
};

export default MyProfile;
