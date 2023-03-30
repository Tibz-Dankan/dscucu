import * as React from "react";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";
import googleDevLogo from "../../assets/google-developer-students-logo.png";
import "./Home.css";
import ActivityCard from "../../components/UI/ActivityCard/ActivityCard";
import activities from "../../data/activities.json";
import team from "../../data/team.json";
import MemberCard from "../../components/UI/MemberCard/MemberCard";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme({
  typography: {
    fontSize: 20,
  },
});

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <header class="home-header">
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
              DSCUCU
            </Typography>
            <div>
              <Link
                to="/login"
                style={{
                  marginRight: "10px",
                  color: "#fff",
                  textDecoration: "none",
                }}
              >
                Login
              </Link>
              <Link
                to="/register"
                style={{
                  backgroundColor: "#228be6",
                  color: "#fff",
                  textDecoration: "none",
                  borderRadius: "20px",
                  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",
                  padding: "10px 20px",
                }}
              >
                Register
              </Link>
            </div>
          </Toolbar>
        </AppBar>
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
            height: "80vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Container maxWidth="sm">
            <img
              src={googleDevLogo}
              alt="Google Developer Students logo"
              style={{ maxWidth: "100%", height: "auto" }}
            />
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >
              Join a community of like-minded tech enthusiasts and unleash your
              potential with DSC UCU!
            </Typography>
            <Typography align="center" sx={{ mt: 2 }}>
              <Link
                to="/register"
                style={{
                  display: "inline-block",
                  textDecoration: "none",
                  borderRadius: "4px",
                  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",
                  backgroundColor: "#1c7ed6",
                  color: "#fff",
                  textAlign: "center",
                  padding: "12px 48px",
                }}
              >
                JOIN
              </Link>
            </Typography>
          </Container>
        </Box>
      </header>
      {/* End hero unit */}
      <main>
        {/* Activities start  */}

        <Container sx={{ py: 8 }} maxWidth="md">
          <Typography gutterBottom variant="h5" component="h2">
            Club Activities
          </Typography>

          <Grid container spacing={4}>
            {activities.map((activity) => (
              <ActivityCard
                id={activity.id}
                image={activity.image}
                name={activity.name}
                description={activity.description}
              />
            ))}
          </Grid>
        </Container>

        {/* Team members start */}
        <Container sx={{ py: 8 }} maxWidth="md">
          <Typography gutterBottom variant="h5" component="h2">
            Our Team
          </Typography>

          <Grid container spacing={4}>
            {team.map((member) => (
              <MemberCard
                id={member.id}
                image={member.image}
                name={member.name}
                role={member.role}
                description={member.description}
              />
            ))}
          </Grid>
        </Container>
      </main>

      {/* Footer */}
      <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}
