
import {
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuList,
} from "@mui/material";
import React, { useContext } from "react";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { SlPeople } from "react-icons/sl";
import { CiBoxList } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";
import { userAuth } from "../../Context/AuthContext";

const SideBar = () => {
    const navigate = useNavigate()
    const {signOutSystem} = useContext(userAuth)
    console.log(signOutSystem)
    const handleSignOut = () => {
        signOutSystem()
        .then(res => {
            
        })
        .then(result => {
            navigate('/login')
        })
    }
  return (
    <div>
      <MenuList className="flex flex-row md:flex-col">
        <Link to="/add-student">
        <MenuItem>
          <ListItemIcon>
            <SlPeople></SlPeople>
          </ListItemIcon>
          <ListItemText>Add Student</ListItemText>
        </MenuItem>
        </Link>
        <Link to='/manage-student'>
        <MenuItem>
          <ListItemIcon>
            <CiBoxList></CiBoxList>
          </ListItemIcon>
          <ListItemText>Manage Student</ListItemText>
        </MenuItem>
        </Link>
        <MenuItem onClick={handleSignOut}>
          <ListItemIcon>
            <LogoutOutlinedIcon></LogoutOutlinedIcon>
          </ListItemIcon>
          <ListItemText>Logout</ListItemText>
        </MenuItem>
      </MenuList>
    </div>
  );
};

export default SideBar;
