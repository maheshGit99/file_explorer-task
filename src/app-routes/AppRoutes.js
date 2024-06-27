import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../container/file-system/layout/Layout";
import DeskTop from "../container/file-system/desktop/DeskTop";
import Download from "../container/file-system/download/Download";
import DiskC from "../container/file-system/diskc/DiskC";
import DiskD from "../container/file-system/diskd/DiskD";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<DeskTop />} />
          <Route path="download" element={<Download />} />
          <Route path="thisPc/diskc" element={<DiskC />} />
          <Route path="thisPc/diskd" element={<DiskD />} />
        </Route>
      </Routes>
    </>
  );
};

export default AppRoutes;
