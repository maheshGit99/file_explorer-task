import { Box } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import FileSidebar from "../../../component/file-sidebar/FileSidebar";

const Layout = () => {
  return (
    <>
      <Box className="main_file_system">
        <Box className="file_sidebar_wrap">
          <FileSidebar />
        </Box>
        <Box className="file_folders_show">
          <Outlet />
        </Box>
      </Box>
    </>
  );
};

export default Layout;
