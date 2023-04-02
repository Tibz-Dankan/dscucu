import { Grid, Card, CardMedia, CardContent, Typography } from "@mui/material";
import Box from "@mui/material/Box";

import "./ActivityCard.css";

const ActivityCard = (props) => {
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
          <Typography>{props.description}</Typography>
        </CardContent>
      </Box>
    </Grid>
  );
};

export default ActivityCard;
