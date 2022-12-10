import {
  Button,
  ButtonGroup,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  Menu,
  MenuItem,
  Paper,
  Select,
  TextField,
  Box,
} from "@mui/material";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

import BorderAllOutlinedIcon from "@mui/icons-material/BorderAllOutlined";
import FormatAlignRightOutlinedIcon from "@mui/icons-material/FormatAlignRightOutlined";

const TableToolbar = ({ setTableView }) => {
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <Box
      sx={{
        px: 3,
        py: 2,
        border: "1px solid #d6d6d6",
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      <Paper
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 0,
        }}
      >
        <TextField
          size="small"
          placeholder="Search..."
          id="outlined-start-adornment"
          sx={{ m: 0, width: "100%" }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        <FormControl
          sx={{ m: 0, minWidth: 120, background: "#f6f7fa" }}
          size="small"
        >
          <InputLabel id="demo-select-small">All Server</InputLabel>
          <Select
            labelId="demo-select-small"
            id="demo-select-small"
            value={age}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>

        <FormControl
          sx={{ m: 0, minWidth: 120, background: "#f6f7fa" }}
          size="small"
        >
          <InputLabel id="demo-select-small">Tags</InputLabel>
          <Select
            labelId="demo-select-small"
            id="demo-select-small"
            value={age}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </Paper>

      <Box
        sx={{
          display: "flex",
          align: "center",
          gap: 3,
        }}
      >
        <Box>
          <ButtonGroup variant="contained" aria-label="outlined button group">
            <IconButton aria-label="border" onClick={() => setTableView(2)}>
              <BorderAllOutlinedIcon />
            </IconButton>
            <IconButton
              aria-label="format"
              onClick={() => setTableView(1)}
              color="primary"
            >
              <FormatAlignRightOutlinedIcon />
            </IconButton>
          </ButtonGroup>
        </Box>
        <Button variant="contained">Create a new server</Button>
      </Box>
    </Box>
  );
};

export default TableToolbar;
