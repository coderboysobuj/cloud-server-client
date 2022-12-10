import {
  Box,
  Button,
  Divider,
  MenuItem,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

const currencies = [
  {
    value: "USD",
    label: "NodeJs",
  },
  {
    value: "EUR",
    label: "WordPress",
  },
  {
    value: "BTC",
    label: "Python",
  },
  {
    value: "JPY",
    label: "Javascript",
  },
];

const AddApplicationForm = () => {
  const [currency, setCurrency] = React.useState("EUR");

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <Paper sx={{ padding: 3, py: 5 }}>
      <Stack spacing={4}>
        <Stack spacing={1}>
          <Typography color="GrayText">
            Add a new application to your server and associated it with a
            project.
          </Typography>
          <Divider />
        </Stack>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            gap: 3,
          }}
        >
          <Box flexGrow={1}>
            <Typography mb={1}>Wordpress</Typography>
            <TextField
              sx={{
                width: "100%",
              }}
              id="standard-select-currency"
              select
              value={currency}
              onChange={handleChange}
              variant="standard"
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Box>
          <Box flexGrow={1}>
            <Typography>App Name *</Typography>
            <TextField
              sx={{
                width: "100%",
              }}
              size="small"
              variant="standard"
            ></TextField>
          </Box>
          <Box flexGrow={1}>
            <Typography fontSize="small" color="GrayText">
              Select you project
            </Typography>
            <TextField
              sx={{
                width: "100%",
              }}
              id="standard-select-currency"
              select
              value={currency}
              onChange={handleChange}
              variant="standard"
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "start",
          }}
        >
          <Button variant="contained">Add application</Button>
        </Box>
      </Stack>
    </Paper>
  );
};

export default AddApplicationForm;
