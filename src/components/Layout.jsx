import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import Header from "./Header/Header";
import { Box, CssBaseline, Toolbar } from "@mui/material";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Header />
      <Sidebar />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          px: 3,
          py: 2,
          paddingBottom: 8,
          background: "#f7f7fe",
        }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
