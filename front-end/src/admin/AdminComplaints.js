import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AdminHeader from "./AdminHeader";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const AdminComplaints = () => {
  const [complaints, setComplaints] = useState([
    {
      _id: 1,
      photo: "",
      name: "Hassan",
      description: "Sudhar ja",
      room: 303,
      category: "bomb blast",
      pno: 1234,
    },
    {
      _id: 2,
      photo: "",
      name: "Hassan",
      description: "jaa be",
      room: 303,
      category: "bomb blast",
      pno: 1234,
    },
  ]);
  const classes = useStyles();

  return (
    <Route
      exact
      path="/complaints"
      render={(props) => (
        <React.Fragment>
          <AdminHeader />
          <div>
            <link
              href="https://fonts.googleapis.com/icon?family=Material+Icons"
              rel="stylesheet"
            />
            <TableContainer component={Paper} style={{ padding: "10px" }}>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>
                      <b>Name</b>
                    </TableCell>
                    <TableCell align="right">
                      <b>Description</b>
                    </TableCell>
                    <TableCell align="right">
                      <b>Room</b>
                    </TableCell>
                    <TableCell align="right">
                      <b>Category</b>
                    </TableCell>
                    <TableCell align="right">
                      <b>P No</b>
                    </TableCell>
                    <TableCell align="right">
                      <b>Action</b>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {complaints.map((complain) => (
                    <TableRow key={complain._id}>
                      <TableCell component="th" scope="row">
                        {complain.name}
                      </TableCell>
                      <TableCell align="right">
                        {complain.description}
                      </TableCell>
                      <TableCell align="right">{complain.room}</TableCell>
                      <TableCell align="right">{complain.category}</TableCell>
                      <TableCell align="right">{complain.pno}</TableCell>
                      <TableCell align="right">
                        <Link
                          to={{
                            pathname: "/complaints/edit",
                            state: {
                              _id: complain._id,
                              name: complain.name,
                              description: complain.description,
                              room: complain.room,
                              category: complain.category,
                              pno: complain.pno,
                            },
                          }}
                        >
                          <span className="material-icons" title="Edit">
                            create
                          </span>
                        </Link>
                        <Link
                          to={{
                            pathname: "/complaints/fwd",
                            state: {
                              _id: complain._id,
                              name: complain.name,
                              description: complain.description,
                              room: complain.room,
                              category: complain.category,
                              pno: complain.pno,
                            },
                          }}
                        >
                          <span
                            className="material-icons"
                            title="Forward Complaint"
                          >
                            forward_to_inbox
                          </span>
                        </Link>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </React.Fragment>
      )}
    />
  );
};

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default AdminComplaints;
