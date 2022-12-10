import React from "react";
import {
  AppBar,
  Avatar,
  Box,
  Container,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { MdAdd, MdNotifications } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";
import { GrSearch } from "react-icons/gr";
import { BiMessageSquareDetail } from "react-icons/bi";

import logo from "../../assets/logo.png";
import avatar from "../../assets/avatar.png";

const Header = () => {
  return (
    <AppBar
      position="fixed"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Container
        maxWidth="xl"
        sx={{
          height: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 9,
          }}
        >
          <img src={logo} />
          <TextField
            placeholder="Search...."
            size="small"
            sx={{
              background: "white",
              width: "80%",
              minWidth: "80%",
              borderRadius: "4px",
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <GrSearch />
                </InputAdornment>
              ),
            }}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 0,
            color: "white",
            height: "100%",
          }}
        >
          <IconButton aria-label="add">
            <MdAdd fontSize="40px" color="white" />
          </IconButton>
          <IconButton aria-label="add">
            <BiMessageSquareDetail fontSize="38px" color="white" />
          </IconButton>
          <IconButton aria-label="notification">
            <MdNotifications fontSize="35px" color="white" />
          </IconButton>

          <Box
            sx={{
              display: "flex",
              gap: 1,
              background: "#3b8bd9",
              height: "100%",
              justifyContent: "center",
              alignItems: "center",
              px: 3,
            }}
          >
            <Avatar
              src={avatar}
              alt="Jisan Khan"
              sx={{ width: 56, height: 56 }}
            />
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography fontWeight="700">John doe</Typography>
              <Typography fontWeight="200">Founder</Typography>
            </Box>
          </Box>

          <IconButton aria-label="dot">
            <BsThreeDotsVertical fontSize="35px" color="white" />
          </IconButton>
        </Box>
      </Container>
    </AppBar>
  );
};

export default Header;
