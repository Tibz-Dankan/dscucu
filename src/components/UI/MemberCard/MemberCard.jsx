import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
} from "@mui/material";

import "./MemberCard.css";

const MemberCard = (props) => {
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
          sx={{ pt: "56.25%" }}
          image={props.image}
          alt={props.name}
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="h2">
            {props.name}
          </Typography>
          <Typography>{props.role}</Typography>
          {/* <Typography>{props.description}</Typography> */}{" "}
          {/*To be shown on another page*/}
        </CardContent>
        <CardActions>
          <Button size="small">View</Button>
          {/*TODO: Redirect to profile page on click with details of a team member */}
        </CardActions>
      </Card>
    </Grid>
  );
};

export default MemberCard;
