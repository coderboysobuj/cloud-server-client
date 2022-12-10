import * as React from "react";
import img from "../../../assets/ellipse.png";
import DataTable from "./DataTable";
import GridTable from "./GridTable";
import TableToolbar from "./TableToolbar";

function createData(serverName, serverImage, oparationName, tag, ip, resource) {
  return { serverName, serverImage, oparationName, tag, ip, resource };
}

const rows = [
  createData(
    "Cloudserver",
    img,
    "Ubunto - NGNIX",
    "Add tag",
    "127.0.0.1",
    "noraml Load"
  ),
  createData(
    "Cloudserver",
    img,
    "Ubunto - NGNIX",
    "Add tag",
    "127.0.0.1",
    "noraml Load"
  ),
  createData(
    "Cloudserver",
    img,
    "Ubunto - NGNIX",
    "Add tag",
    "127.0.0.1",
    "noraml Load"
  ),
  createData(
    "Cloudserver",
    img,
    "Ubunto - NGNIX",
    "Add tag",
    "127.0.0.1",
    "noraml Load"
  ),
];

export default function AcccessibleTable() {
  const [tableView, setTableView] = React.useState(1); // 1 -> data / 2 -> grid
  return (
    <React.Fragment>
      <TableToolbar setTableView={setTableView} />

      {tableView === 1 ? <DataTable rows={rows} /> : <GridTable />}
    </React.Fragment>
  );
}
