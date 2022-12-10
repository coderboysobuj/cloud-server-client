import { Box, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import img from "../../../../../assets/ellipse.png";

const Item = () => {
  return (
    <Grid item xs={3}>
      <Box
        border="1px solid gray"
        sx={{
          display: "flex",
          gap: 2,
          px: 3,
          py: 1,
          borderRadius: "4px",
          alignItems: "center",
          background: "#f6f7fa",
        }}
      >
        <img src={img} width="25px" />
        <Typography>Joomla</Typography>
      </Box>
    </Grid>
  );
};

export default Item;
