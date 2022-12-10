import { CardContent, Typography, Card } from "@mui/material";
import React from "react";

import ellipse from "../../assets/ellipse.png";

const Cards = ({ name, code, iconImage }) => {
  return (
    <Card
      sx={{
        display: "flex",
        height: "78px",
        width: "275px",
        borderRadius: "5px",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "start",
        px: 2,
        py: 1,
        gap: 2,
        bgcolor: "white",
      }}
    >
      <img src={ellipse} alt="card image" width="40px" height="40px" />
      <CardContent>
        <Typography variant="h6" boxSizing="18px" fontWeight="500">
          {name ? name : "Cloudserver"}
        </Typography>
        <Typography variant="p" color="gray">
          {code ? code : "127.0.0.1"}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Cards;
