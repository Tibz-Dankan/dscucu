import React, { useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";
import googleDevLogo from "../../assets/google-developer-students-logo.png";
import "./Home.css";
import ActivityCard from "../../components/UI/ActivityCard/ActivityCard";
import activities from "../../data/activities.json";
import team from "../../data/team.json";
import MemberCard from "../../components/UI/MemberCard/MemberCard";
// import heroBgImage from "../../assets/hero-bg-image.png";
import Paper from "@mui/material/Paper";
import Footer from "../../components/layouts/Footer/Footer";
import { wakeUpServer } from "../../API/email";

const heroImage =
  "https://res.cloudinary.com/dlmv4ot9h/image/upload/v1680454316/DSC_UCU/Activities/dsc-ucu-image_dajclg.png";

const styles = {
  paperContainer: {
    backgroundImage: `linear-gradient(to right,  rgba(33, 37, 41, 0.2),rgba(33, 37, 41, 0.7), rgba(33, 37, 41, 0.2)), url(${heroImage})`,

    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100vh",
    width: "100%",
  },
};

export default function Home() {
  useEffect(() => {
    const wakeUpServerHandler = async () => {
      await wakeUpServer();
    };
    wakeUpServerHandler();
  }, []);

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
        <Paper style={styles.paperContainer}>
          <Box
            sx={{
              pt: 8,
              pb: 6,
              height: "80vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Container
              maxWidth="sm"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img
                src={googleDevLogo}
                alt="Google Developer Students logo"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  borderRadius: "4px",
                }}
              />
              <Typography
                variant="h5"
                color="text.secondary"
                paragraph
                sx={{
                  color: "#f1f3f5",
                  mt: 2,
                  fontSize: 20,
                  maxWidth: "400px",
                  textAlign: "start",
                }}
              >
                Join a community of like-minded tech enthusiasts and unleash
                your potential with DSC UCU!
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
        </Paper>
      </header>
      {/* End hero unit */}
      <main>
        {/* Activities start  */}

        <Container sx={{ py: 8 }} maxWidth="md">
          <Box
            sx={{
              height: "100%",
              display: "flex",
              justifyContent: "center",
              bgcolor: "#f1f3f5",
              marginBottom: 8,
            }}
          >
            <Typography gutterBottom variant="h5" component="h2">
              Club Activities
            </Typography>
          </Box>
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
          <Box
            sx={{
              height: "100%",
              display: "flex",
              justifyContent: "center",
              bgcolor: "#f1f3f5",
              marginBottom: 8,
            }}
          >
            <Typography gutterBottom variant="h5" component="h2">
              Our Team
            </Typography>
          </Box>

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
      <Footer />
      {/* End footer */}
    </Box>
  );
}
