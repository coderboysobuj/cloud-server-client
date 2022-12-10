import { Breadcrumbs, Link, Typography } from "@mui/material";
import React from "react";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Stack } from "@mui/system";

const breadcrumbs = [
  <Link underline="hover" key="1" color="inherit" href="/">
    Server
  </Link>,
  <Link
    underline="hover"
    key="2"
    color="inherit"
    href="/material-ui/getting-started/installation/"
  >
    Core
  </Link>,
  <Typography key="3" color="text.primary">
    Breadcrumb
  </Typography>,
];

const Breadcrumb = () => {
  return (
    <Stack spacing={0}>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </Breadcrumbs>
      <Typography fontSize="small" variant="h4" color="GrayText">
        Recently viewed server
      </Typography>
    </Stack>
  );
};

export default Breadcrumb;
