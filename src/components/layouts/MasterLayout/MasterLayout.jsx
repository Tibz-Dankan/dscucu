import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";
import Chart from "../../MUI/Dashboard/Chart";
import Deposits from "../../MUI/Dashboard/Deposits";
import Orders from "../../MUI/Dashboard/Orders";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const mdTheme = createTheme();

function MasterLayoutContent() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Header title="Master Layout" />
      <Sidebar />

      {/* main Content start*/}
      <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          flexGrow: 1,
          height: "100vh",
          overflow: "auto",
        }}
      >
        <Toolbar />
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <Grid container spacing={3}>
            {/* pros */}
          </Grid>
          <Copyright sx={{ pt: 4 }} />
        </Container>
      </Box>
      {/* main Content end*/}
    </Box>
  );
}

export default function MasterLayout() {
  return <MasterLayoutContent />;
}
