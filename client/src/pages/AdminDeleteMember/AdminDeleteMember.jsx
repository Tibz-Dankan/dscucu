import React, { useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Grid, CardContent, CardActions } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MasterLayout from "../../components/layouts/MasterLayout/MasterLayout";
import { User } from "../../utils/user";
import { Link } from "react-router-dom";
import "./AdminDeleteMember.css";
import { useUpdateProfile } from "../../context/ProfileContext";

const AdminDeleteMember = () => {
  const users = new User().findAll();
  const updateMember = useUpdateProfile({});

  const handleMemberUpdate = (member) => {
    updateMember(member);
  };

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
    <MasterLayout title="Delete Members">
      {/* List of members for update */}
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography>Delete Members</Typography>
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
                        {user.firstName} {user.lastName}
                      </Typography>
                      <Typography>{user.email}</Typography>
                      <Typography>{user.phone}</Typography>
                      <Typography>
                        Member since {day(user.createdAt)}{" "}
                        {time(user.createdAt)}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button
                        size="small"
                        onClick={() => handleMemberUpdate(user)}
                        style={{
                          backgroundColor: "#228be6",
                          color: "#fff",
                          borderRadius: "4px",
                          padding: "4px 16px",
                        }}
                      >
                        <Link
                          style={{
                            textDecoration: "none",
                            color: "#fff",
                            width: "128px",
                          }}
                          to="idx"
                        >
                          Delete member
                        </Link>
                      </Button>
                    </CardActions>
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

export default AdminDeleteMember;
