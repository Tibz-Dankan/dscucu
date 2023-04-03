import React from "react";
import MasterLayout from "../../layouts/MasterLayout/MasterLayout";
import {
  Box,
  CardContent,
  Card,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";

import { Auth } from "../../../utils/auth";
import { User } from "../../../utils/user";

const MyProfile = () => {
  const id = new Auth().user().id;
  const user = new User().findById(id);

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
        <Card style={{ backgroundColor: "#f1f3f5" }}>
          <CardContent sx={{ flexGrow: 1, textAlign: "center" }}>
            <Typography gutterBottom variant="h6" component="h2">
              {user.firstName} {user.lastName}
            </Typography>
            <Typography>{user.email}</Typography>
            <Typography>{user.phone}</Typography>
            <CardActions>
              <Button size="small">
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
        </Card>
      </Box>
    </MasterLayout>
  );
};

export default MyProfile;
