import { Box, Typography } from "@mui/material";
import React from "react";
import { GrServer } from "react-icons/gr";
import AirplayIcon from "@mui/icons-material/Airplay";

const SidebarItem = ({ active, icon, text, open, handleClose }) => {
  return (
    <Box
      onClick={handleClose}
      sx={{
        display: "flex",
        gap: 1,

        px: 2,
        ml: !active && 1,
        py: 1,
        alignItems: "center",
        borderLeft: active && ` 5px solid blue`,
        borderRadius: "2px",
        cursor: "pointer",
        ":hover": {
          color: "blue",
        },
        color: active ? "blue" : "unset",
      }}
    >
      {icon}

      {open && <Typography>{text}</Typography>}
    </Box>
  );
};

export default SidebarItem;
