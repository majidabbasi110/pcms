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



const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
  }));


const ForwardComplaints = (props) => {

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
              label="Room.No"
              variant="outlined"
              type="number"
              required="required"
              value={props.location.state.room}
              
              style={{ width: "80%"}}
            />
            </div>

            <div className='form-group'>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Select your complain type</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          label="Select your complain type"
          style = {{width : "300px"}}
          value={props.location.state.category}
          
        >
          
        </Select>
      </FormControl>
          </div>


      <div className='form-group'>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Building</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          label="Location"
          style = {{width : "300px"}}
          value={props.location.state.building}
          
        >
        </Select>
      </FormControl>
      </div>

            
      <div  className='form-group'>
        <TextField
          label="P.NO"
          id="outlined-start-adornment"
          type = "number"
          required="required"
          style={{right:"10px"}}
          value={props.location.state.pno}
          
          className={clsx(classes.margin, classes.textField)}
          InputProps={{
            startAdornment: <InputAdornment position="start">
                <AccountCircle/>
            </InputAdornment>,
          }}
          variant="outlined"
        />
        <h4>Photo</h4>
          
          <label className='btn btn-secondary' style={{"background-color": "darkseagreen"}}>
              <a>Show Photo</a>
          </label>
            </div>
        
            <Button
        type="submit"
        variant="contained"
        color="darkseagreen"
      >
        Send Complain to
      </Button>
        </form>



    )
    

  return (
    <div>
      <AdminHeader />
      <div>{props.location.state.name}</div>
      <div className='col-md-8 offset-md-2'>
      {newform()}
      </div>
    </div>
  );
};

export default ForwardComplaints;
