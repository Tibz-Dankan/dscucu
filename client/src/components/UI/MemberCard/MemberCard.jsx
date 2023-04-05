import {
  Grid,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
} from "@mui/material";
import Box from "@mui/material/Box";

import { Link } from "react-router-dom";

import "./MemberCard.css";
import { useUpdateProfile } from "../../../context/ProfileContext";

const MemberCard = (props) => {
  // profile information of context via an exposed
  const updateProfile = useUpdateProfile({});

  const handleUpdateProfile = (payload) => {
    updateProfile(payload);
  };

  return (
    <Grid item key={props.id} xs={12} sm={6} md={4}>
      <Box
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          bgcolor: "#f1f3f5",
        }}
      >
        <CardMedia
          component="img"
          sx={{
            height: "200px",
            width: "200px",
            borderRadius: "50%",
          }}
          image={props.image}
          alt={props.name}
        />
        <CardContent sx={{ flexGrow: 1, textAlign: "center" }}>
          <Typography gutterBottom variant="h5" component="h2">
            {props.name}
          </Typography>
          <Typography>{props.role}</Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            onClick={() => {
              handleUpdateProfile(props);
            }}
          >
            <Link
              to="profile"
              style={{
                backgroundColor: "#228be6",
                color: "#fff",
                textDecoration: "none",
                borderRadius: "4px",
                padding: "4px 16px",
              }}
            >
              View Profile
            </Link>
          </Button>
        </CardActions>
      </Box>
    </Grid>
  );
};

export default MemberCard;
