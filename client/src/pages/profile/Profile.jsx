import * as React from "react";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";
import "./Profile.css";
import Paper from "@mui/material/Paper";
import { Grid, Card, CardMedia, CardContent } from "@mui/material";
import { useProfile } from "../../context/ProfileContext";
import Footer from "../../components/layouts/Footer/Footer";

const styles = {
  paperContainer: {
    backgroundImage: `linear-gradient(to right, rgba(33, 37, 41, 0.08),rgba(33, 37, 41, 0.4), rgba(33, 37, 41, 0.08)) `,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "60vh",
    width: "100%",
    marginBottom: "350px",
  },
};

const Profile = () => {
  const profile = useProfile();

  return (
    <Box>
      <header className="home-header">
        <CssBaseline />
        <AppBar position="relative" style={{ position: "relative" }}>
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
                to="/"
                style={{
                  marginRight: "10px",
                  color: "#fff",
                  textDecoration: "none",
                }}
              >
                Home
              </Link>
            </div>
          </Toolbar>
        </AppBar>
        <Box
          sx={{
            pt: 8,
            pb: 6,
            height: "60vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "350px",
          }}
        >
          {/* Profile data here */}
          <Container
            maxWidth="sm"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Grid item key={profile?.id} xs={12} sm={6} md={4}>
              <Box
                sx={{
                  mt: 40,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  bgcolor: "#f1f3f5",
                  width: "300px",
                  padding: "0px 10px",
                }}
              >
                <CardMedia
                  component="img"
                  image={profile?.image}
                  alt={profile.name}
                  sx={{
                    height: "200px",
                    width: "200px",
                    borderRadius: "50%",
                    margin: "10px",
                    alignSelf: "center",
                  }}
                />
                <CardContent sx={{ flexGrow: 1, textAlign: "center" }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {profile?.name}
                  </Typography>
                  <Typography>{profile?.role}</Typography>
                  <Typography
                    variant="h6"
                    style={{ fontWeight: "bold", marginTop: "20px" }}
                  >
                    About me
                  </Typography>
                  {/* improve the styling here */}
                  <Typography>{profile?.description}</Typography>
                </CardContent>
              </Box>
            </Grid>
          </Container>
        </Box>
      </header>

      {/* Footer */}
      <Footer />
      {/* End footer */}
    </Box>
  );
};

export default Profile;
