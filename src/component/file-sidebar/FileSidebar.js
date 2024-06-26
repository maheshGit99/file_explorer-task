import React, { useState } from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import PersonalVideoIcon from "@mui/icons-material/PersonalVideo";
import AirplayIcon from "@mui/icons-material/Airplay";
import { Link, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Currentpanel } from "../../redux/slice/FolderSlice";

const FileSidebar = () => {
  const [open, setOpen] = useState(true);
  const dispatch = useDispatch();
  const location = useLocation();
  // const folderData = useSelector((state) => state.FolderSlice.files);
  const handleClick = () => {
    setOpen(!open);
  };
  const handlePanel = (value) => {
    dispatch(Currentpanel(value));
  };
  return (
    <>
      <List
        className="sidebar_list"
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        <ListItemButton>
          <Link
            to="/desktop"
            className={`file_sidebar_link ${
              location?.pathname === "/desktop" ? "active" : ""
            }`}
            onClick={() => handlePanel(1)}
          >
            <ListItemIcon>
              <AirplayIcon />
            </ListItemIcon>
            <ListItemText primary="Desktop" />
          </Link>
        </ListItemButton>
        <ListItemButton>
          <Link
            to="/download"
            onClick={() => handlePanel(2)}
            className={`file_sidebar_link ${
              location?.pathname === "/download" ? "active" : ""
            }`}
          >
            <ListItemIcon>
              <FileDownloadIcon />
            </ListItemIcon>
            <ListItemText primary="Download" />
          </Link>
        </ListItemButton>
        <ListItemButton onClick={handleClick}>
          <ListItemIcon>
            <PersonalVideoIcon />
          </ListItemIcon>
          <ListItemText primary="This PC" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>       
            <ListItemButton sx={{ pl: 4 }}>
              <Link
                to="/thisPc/diskc"
                className={`file_sidebar_link ${
                  location?.pathname === "/thisPc/diskc" ? "active" : ""
                }`}
                onClick={() => handlePanel(3)}
              >
                <ListItemIcon>
                  <AirplayIcon />
                </ListItemIcon>
                <ListItemText primary="Local Disk C" />
              </Link>
            </ListItemButton>

            <ListItemButton sx={{ pl: 4 }}>
              <Link
                to="/thisPc/diskd"
                className={`file_sidebar_link ${
                  location?.pathname === "/thisPc/diskd" ? "active" : ""
                }`}
                onClick={() => handlePanel(4)}
              >
                <ListItemIcon>
                  <AirplayIcon />
                </ListItemIcon>
                <ListItemText primary="Local Disk D" />
              </Link>
            </ListItemButton>
          </List>
        </Collapse>
      </List>
    </>
  );
};

export default FileSidebar;
