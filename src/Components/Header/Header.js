import {
  AppBar,
  Avatar,
  Box,
  Chip,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        style={{ background: "#ffffff", color: "#000000", boxShadow: "none" }}
        position="static"
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Chip
            avatar={<Avatar alt="Natacha" src="/static/images/avatar/1.jpg" />}
            label="Avatar lorem ipsom"
            variant="outlined"
          />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
