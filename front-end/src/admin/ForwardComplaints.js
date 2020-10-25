import React, { useState, useEffect } from "react";
import AdminHeader from "./AdminHeader";
import Input from '@material-ui/core/Input';
import RadioGroup from '@material-ui/core/RadioGroup';
import { TextField, Button,Grid } from "@material-ui/core";
import AccountCircle from '@material-ui/icons/AccountCircle';
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import clsx from 'clsx';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
import Card from "../core/Card"

const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
  }));


const ForwardComplaints = (props) => {
  

  const {
    user: { _id, name, email, role },
  } = isAuthenticated();
    const classes = useStyles();
    const newform = () => (
        <form className='mb-3' >
            
        <hr></hr>

            <div className='form-group'>
                <TextField
              disabled id="standard-disabled"
              label="Name"
              variant="outlined"
              type="text"
              required="required"
              value={props.location.state.name}
              style={{ width: "80%" }}
            />
            </div>

            <div className='form-group'>
                <TextField
              disabled id="standard-disabled"
              label="Description"
              variant="outlined"
              type="text"
              required="required"
              value={props.location.state.description}
              style={{ width: "80%"}}
            />
            </div>


            <div className='form-group'>
                <TextField
              disabled id="standard-disabled"
              label="Building"
              variant="outlined"
              type="text"
              required="required"
              value={props.location.state.building}
              style={{ width: "80%"}}
            />
            </div>



            <div className='form-group'>
                <TextField
              disabled id="standard-disabled"
              label="Room.No"
              variant="outlined"
              type="number"
              required="required"
              value={props.location.state.room}
              
              style={{ width: "80%"}}
            />
            </div>

            <div className='form-group'>
                <TextField
              disabled id="standard-disabled"
              label="Category"
              variant="outlined"
              type="text"
              required="required"
              value={props.location.state.category}
              style={{ width: "80%"}}
            />
            </div>


      
      
      <div className='form-group'>
                <TextField
              disabled id="standard-disabled"
              label="P.No"
              variant="outlined"
              type="number"
              required="required"
              value={props.location.state.pno}
              style={{ width: "80%"}}
            />
            </div>
            
        <div  className='form-group'>
        
              <h4>Photo</h4>
              <div>
              {<Card complaint={props.location.state}/>}
              </div>
              
              
              <div>
              <Button
              type="submit"
              variant="contained"
              color="darkseagreen"
            >
              Send Complain to
            </Button>
              </div>
              
      </div>
        
            
        </form>



    )
    

  return (
    <div>
      <Layout
            title="Dashboard"
            description={`G'day ${name}!`}
            className="container-fluid"
          ></Layout>
      
      <div className='col-md-8 offset-md-2'>
      {newform()}
      </div>
    </div>
  );
};

export default ForwardComplaints;