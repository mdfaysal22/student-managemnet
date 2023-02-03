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
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        style={{ background: "#ffffff", color: "#000000", boxShadow: "none" }}
        position="static"
      >
        <Toolbar>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Chip
            avatar={<PersonOutlinedIcon></PersonOutlinedIcon>}
            label="Avatar lorem ipsom"
            variant="outlined"
          />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
