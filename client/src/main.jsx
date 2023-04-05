import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { ContextProvider } from "./context/ContextProvider";

// Theme for the entire app
const theme = createTheme({
  typography: {
    fontSize: 20,
  },
  palette: {
    background: {
      default: "#f1f3f5",
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ContextProvider>
        <App />
      </ContextProvider>
    </ThemeProvider>
  </React.StrictMode>
);
