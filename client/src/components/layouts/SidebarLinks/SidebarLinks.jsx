import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListSubheader from "@mui/material/ListSubheader";
import PeopleIcon from "@mui/icons-material/People";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import EditIcon from "@mui/icons-material/Edit";
import LockIcon from "@mui/icons-material/Lock";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
import "./SidebarLinks.css";

export const mainListItems = (
  <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
        <HomeIcon />
      </ListItemIcon>
      <Link to="/" className="sidebar-link">
        Home
      </Link>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <PersonIcon />
      </ListItemIcon>
      <Link to="my-profile" className="sidebar-link">
        My profile
      </Link>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <EditIcon />
      </ListItemIcon>
      <Link to="update-profile" className="sidebar-link">
        Update Profile
      </Link>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <LockIcon />
      </ListItemIcon>
      <Link to="change-password" className="sidebar-link">
        change password
      </Link>
    </ListItemButton>
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      ADMIN
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <Link to="members" className="sidebar-link">
        Members
      </Link>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <EditIcon />
      </ListItemIcon>
      <Link to="update-member" className="sidebar-link">
        Update Member
      </Link>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <DeleteIcon />
      </ListItemIcon>
      <Link to="delete-member" className="sidebar-link">
        Delete Member
      </Link>
    </ListItemButton>
  </React.Fragment>
);
