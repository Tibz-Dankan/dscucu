import { Grid, Card, CardMedia, CardContent, Typography } from "@mui/material";

import "./ActivityCard.css";

const ActivityCard = (props) => {
  return (
    <Grid item key={props.id} xs={12} sm={6} md={4}>
      <Card
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CardMedia
          component="img"
          sx={{
            pt: "56.25%",
          }}
          image="https://source.unsplash.com/random" //To be removed
          //   image={props.image} //To be use this finally
          alt={props.name}
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="h2">
            {props.name}
          </Typography>
          <Typography>{props.description}</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default ActivityCard;
