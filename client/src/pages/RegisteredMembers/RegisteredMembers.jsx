import React from "react";
import {
  Grid,
  Box,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Card,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";
import { User } from "../../utils/user";
import MasterLayout from "../../components/layouts/MasterLayout/MasterLayout";

const RegisteredMembers = () => {
  const users = new User().findAll();

  console.log("users");
  console.log(users);

  console.log("users");
  console.log(users);

  // function computes and returns date in the format   -> Sun mar 03 2023;
  const day = (dateParam) => {
    if (!dateParam) {
      const defaultDate = new Date("2023-04-03T12:05:50.000Z");
      return defaultDate.toDateString();
    }
    const date = new Date(dateParam);
    return date.toDateString(); // provides format  -> Sun Jul 03 2022;
  };

  // function computes and returns time in the format  -> 3:47 AM
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
    <MasterLayout title={"Members"}>
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography>Registered Members</Typography>
        <Grid
          container
          spacing={4}
          style={{
            marginTop: "8px",
          }}
        >
          {users.map((user, index) => {
            if (user.role !== "admin") {
              return (
                <Grid item key={index} xs={12} sm={6} md={4}>
                  <Box
                    sx={{
                      height: "100%",
                      minWidth: "180px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      // bgcolor: "#f1f3f5",
                    }}
                  >
                    <IconButton>
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
                        {user.firstName} {user.lastName}
                      </Typography>
                      <Typography>{user.email}</Typography>
                      <Typography>{user.phone}</Typography>
                      <Typography>
                        Member since {day(user.createdAt)}{" "}
                        {time(user.createdAt)}
                      </Typography>
                    </CardContent>
                  </Box>
                </Grid>
              );
            }
          })}
        </Grid>
      </Box>
    </MasterLayout>
  );
};

export default RegisteredMembers;
