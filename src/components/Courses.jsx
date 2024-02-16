import * as React from "react";
import Link from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Button } from "@mui/material";
import Title from "./Title";
import { rows } from "../seeds/courseData";

function preventDefault(event) {
  event.preventDefault();
}

export default function Courses({ status }) {
  const link = status === "Join" ? "Join" : "Open";

  return (
    <React.Fragment>
      <Title>{status} Courses</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Code</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Credits</TableCell>
            <TableCell>Registering</TableCell>
            <TableCell>Schedule</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              onClick={() => console.log("row.id: ", row.id)}
            >
              <TableCell>{row.courseCode}</TableCell>
              <TableCell>{row.courseName}</TableCell>
              <TableCell>{row.courseCredits}</TableCell>
              <TableCell>{row.courseRegistering}</TableCell>
              <TableCell>{row.courseSchedule}</TableCell>
              <TableCell>
                <Button variant="outlined">{link}</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        {status === "Join" && "See more courses"}
      </Link>
    </React.Fragment>
  );
}
