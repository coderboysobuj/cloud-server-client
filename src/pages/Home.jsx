import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import Breadcrumb from "../components/common/Breadcrumb";
import Cards from "../components/common/Cards";
import ServerTable from "../components/Table/ServerTable/Table";
import TabPanel from "../components/Home/Tabpanel/Pannel";
import { Stack } from "@mui/system";
import AddApplicationForm from "../components/Home/Paper/AddApplicationForm";

const Home = () => {
  return (
    <Stack spacing={4}>
      <Breadcrumb />
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: 3,
          my: 4,
        }}
      >
        <Cards name="Cloudeserver" code="" />
        <Cards name="Nodejs" code="" />
        <Cards name="Cloudeserver" code="" />
      </Box>
      <Box sx={{ bgcolor: "white" }}>
        <ServerTable />
      </Box>
      <Typography variant="h1" fontSize="22px" fontWeight={600}>
        Deploy web app
      </Typography>
      <TabPanel />

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h1" fontSize="22px" fontWeight={600}>
          Add application
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Button variant="contained" color="inherit">
            Cancel
          </Button>
          <Button variant="contained">Deploy app-mohr</Button>
        </Box>
      </Box>
      <AddApplicationForm />
    </Stack>
  );
};

export default Home;
