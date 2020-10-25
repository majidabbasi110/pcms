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
import { getComplaints } from "./apiAdmin";
import Layout from "../core/Layout";
import Card from "../core/Card"
import { isAuthenticated } from "../auth";

const AdminComplaints = () => {
  const {
    user: { _id, name, email, role },
  } = isAuthenticated();

  const adminLinks = () => {
    return (
      <div className="card">
        <h4 className="card-header">Admin Links</h4>
        <ul className="list-group">
          <li className="list-group-item"></li>
          <li className="list-group-item"></li>
        </ul>
      </div>
    );
  };

  const adminInfo = () => {
    return (
      <div className="card mb-5">
        <h3 className="card-header">User Information</h3>
        <ul className="list-group">
          <li className="list-group-item">{name}</li>
          <li className="list-group-item">{email}</li>
          <li className="list-group-item">
            {role === 1 ? "Admin" : "Registered User"}
          </li>
        </ul>
      </div>
    );
  };

  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    const getC = async () => {
      const complaint = await getComplaints();
      console.log(complaint.complaints);
      const all = complaint.complaints;
      setComplaints(all);
    };
    getC();
  }, []);

  
  const classes = useStyles();

  return (
    <Route
      exact
      path="/complaints"
      render={(props) => (
        <React.Fragment>
          <Layout
            title="Dashboard"
            description={`G'day ${name}!`}
            className="container-fluid"
          ></Layout>

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
                      <b>Building</b>
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
                        {console.log(complain)}
                    {<Card complaint={complain}/>}
                      </TableCell>
                      <TableCell align="right">
                        {complain.description}
                      </TableCell>
                      <TableCell align="right">
                        {complain.building}
                      </TableCell>
                      <TableCell align="right">{complain.room}</TableCell>
                      <TableCell align="right">{complain.category}</TableCell>
                      <TableCell align="right">{complain.pno}</TableCell>
                      <TableCell align="right">
                        
                        <Link
                          to={{
                            pathname: "/complaints/fwd",
                            state: {
                              _id: complain._id,
                              name: complain.name,
                              description: complain.description,
                              building: complain.building,
                              room: complain.room,
                              category: complain.category,
                              pno: complain.pno,
                              photo: complain.photo
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