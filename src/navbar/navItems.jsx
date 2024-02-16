import * as React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import PersonIcon from "@mui/icons-material/Person";

export const mainNavItems = (
  <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItemButton>
  </React.Fragment>
);

export const secondaryNavItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      My Account
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <PersonIcon />
      </ListItemIcon>
      <ListItemText primary="Profile" />
    </ListItemButton>
  </React.Fragment>
);
