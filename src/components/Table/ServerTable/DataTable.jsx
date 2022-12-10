import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import * as React from "react";

import CircleIcon from "@mui/icons-material/Circle";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import { Box, IconButton, Typography } from "@mui/material";

const DataTable = ({ rows }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="caption table">
        <caption style={{ fontWeight: 500 }}>Showing 1 - 1 of Results</caption>
        <TableHead
          sx={{
            background: "#f6f7fa",
            border: "none",
          }}
        >
          <TableRow>
            <TableCell sx={{ fontWeight: "bold" }}>Server</TableCell>
            <TableCell sx={{ fontWeight: "bold" }} align="right">
              IP Adresss
            </TableCell>
            <TableCell sx={{ fontWeight: "bold" }} align="right">
              Resource Usage
            </TableCell>
            <TableCell sx={{ fontWeight: "bold" }} align="right">
              Tags
            </TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, i) => (
            <TableRow key={i}>
              <TableCell component="th" scope="row">
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                  }}
                >
                  <CircleIcon fontSize={"1"} />
                  <img src={row.serverImage} width="25px" />
                  <Box>
                    <Typography fontWeight={600}>{row.serverName}</Typography>
                    <Typography color="GrayText" fontSize="small">
                      {row.oparationName}
                    </Typography>
                  </Box>
                </Box>
              </TableCell>
              <TableCell align="right">{row.ip}</TableCell>
              <TableCell align="right">
                <Box
                  sx={{
                    display: "flex",
                    gap: 1,
                    alignItems: "center",
                    justifyContent: "end",
                  }}
                >
                  <TaskAltIcon color="success" />
                  <Typography color="GrayText">{row.resource}</Typography>
                </Box>
              </TableCell>
              <TableCell align="right">{row.tag}</TableCell>
              <TableCell align="right">
                <IconButton>
                  <MoreHorizIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DataTable;
