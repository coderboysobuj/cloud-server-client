import { Box, Divider, Stack, styled, Toolbar } from "@mui/material";
import React, { useState } from "react";
import MuiDrawer from "@mui/material/Drawer";
import SidebarItem from "./SidebarItem";
import { GrServer } from "react-icons/gr";
import DvrIcon from "@mui/icons-material/Dvr";
import LanguageIcon from "@mui/icons-material/Language";
import Diversity2Icon from "@mui/icons-material/Diversity2";
import Diversity1Icon from "@mui/icons-material/Diversity1";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import ExtensionIcon from "@mui/icons-material/Extension";
import SettingsIcon from "@mui/icons-material/Settings";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import KeyboardTabIcon from "@mui/icons-material/KeyboardTab";
const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const SubSidebar = () => {
  const [open, setOpen] = useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <Drawer
      open={open}
      variant="permanent"
      // sx={{
      //   width: drawerWidth,
      //   flexShrink: 0,
      //   [`& .MuiDrawer-paper`]: {
      //     width: drawerWidth,
      //     boxSizing: "border-box",
      //   },
      // }}
    >
      <Toolbar />
      <Stack>
        <SidebarItem
          handleClose={handleDrawerClose}
          open={open}
          icon={<DvrIcon />}
          text="Servers"
        />
        <SidebarItem
          open={open}
          icon={<LanguageIcon />}
          active
          text="Web Applications"
          handleClose={handleDrawerClose}
        />
        <SidebarItem
          handleClose={handleDrawerClose}
          open={open}
          icon={<Diversity2Icon />}
          text="Atomic Deployment"
        />
        <SidebarItem
          handleClose={handleDrawerClose}
          open={open}
          icon={<AutoGraphIcon />}
          text="Projects"
        />
        <Divider
          sx={{
            my: 2,
          }}
        />

        <SidebarItem
          handleClose={handleDrawerClose}
          open={open}
          icon={<ExtensionIcon />}
          text="Addons"
        />
        <SidebarItem
          handleClose={handleDrawerClose}
          open={open}
          icon={<SettingsIcon />}
          text="Settings"
        />
        <SidebarItem
          handleClose={handleDrawerClose}
          open={open}
          icon={<ReceiptLongIcon />}
          text="Billing"
        />
        <SidebarItem
          handleClose={handleDrawerClose}
          open={open}
          icon={<AccountCircleIcon />}
          text="Account"
        />
        <SidebarItem
          handleClose={handleDrawerClose}
          icon={<SupportAgentIcon />}
          open={open}
          text="Help Center"
        />

        <Divider
          sx={{
            my: 2,
          }}
        />
        <Box
          onClick={() => setOpen((prev) => !prev)}
          sx={{
            position: "absolute",
            bottom: 10,
          }}
        >
          <SidebarItem
            open={open}
            icon={<KeyboardTabIcon />}
            text="Collapse Menu"
          />
        </Box>
      </Stack>
    </Drawer>
  );
};

export default SubSidebar;
