import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import MuiDrawer from "@mui/material/Drawer";

import {
  mainListItems,
  secondaryListItems,
} from "../SidebarLinks/SidebarLinks";

import {
  useOpenSidebar,
  useToggleSidebar,
} from "../../../context/SidebarContext";

const drawerWidth = 240;

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

const Sidebar = () => {
  const open = useOpenSidebar();
  const toggleSidebar = useToggleSidebar();
  const [user, setUser] = useState({});

  const updateUserHandler = (state) => {
    setUser(state);
  };
  // check authentication
  useEffect(() => {
    const checkAuth = () => {
      const authData = localStorage.getItem("auth");
      if (!authData) return;
      const parsedData = JSON.parse(authData);
      const { user } = parsedData;
      updateUserHandler(user);
    };
    checkAuth();
  }, []);

  return (
    <Drawer variant="permanent" open={open}>
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          px: [1],
        }}
      >
        <IconButton onClick={toggleSidebar}>
          <ChevronLeftIcon />
        </IconButton>
      </Toolbar>
      <Divider />
      <List component="nav">
        {mainListItems}
        <Divider sx={{ my: 1 }} />
        {/* Admin links */}
        {user?.role === "admin" && secondaryListItems}
      </List>
    </Drawer>
  );
};

export default Sidebar;
