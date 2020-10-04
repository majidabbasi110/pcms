
import React, { Component, useState, useEffect } from 'react';
import Layout from './core/Layout'
import { isAuthenticated } from './auth/index'
import { Link, Redirect } from 'react-router-dom'
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

const Report = () => {
    const classes = useStyles();
    const [values, setValues] = useState({

        name: '',
        id: '',
        description: '',
        category: '',
        categories: [],
        room: '',
        quantity: '',
        photo: '',
        loading: false,
        error: '',
        createdproduct: '',
        formdata: '',
        redirectto: false,
    })
    
    const { name,
        id,
        description,
        category,
        categories,
        room,
        quantity,
        loading,
        error,
        createdproduct,
        formdata,
        redirectto } = values
        
    const handlechange = name => event => {
        const value = name === 'photo' ? event.target.files[0] : event.target.value
        formdata.set(name, value)
        setValues({ ...values, [name]: value })
    }
    
    const showerror = () =>(
        <div className = 'alert alert-danger' style={{display : error ?  '' :'none' }}>
            {error}
        </div>
    )
    const showsuccess = () =>(
        <div className = 'alert alert-info' style={{display : createdproduct ?  '' :'none' }}>
         <h2>   {`${createdproduct}`} is now created</h2>
        </div>
    )
    const showloading = () =>(
        <div className = 'alert alert-success' style={{display : loading ?  '' :'none' }}>
         <h2> Loading</h2>
        </div>
    )
    const newform = () => (
        <form className='mb-3' >
            <h4>Post Photo</h4>
          
            <label className='btn btn-secondary' style={{"background-color": "darkseagreen"}}>
                <input type='file' name='photo' accept="image/*" onChange={handlechange('photo')}  />
            </label>
        <hr></hr>

            <div className='form-group'>
                <TextField
              id="outlined-basic"
              label="Name"
              variant="outlined"
              type="text"
              required="required"
              value={name}
         
              style={{ width: "80%" }}
            />
            </div>

            <div className='form-group'>
                <TextField
              id="filled-multiline-static"
              label="Description"
              variant="outlined"
              type="text"
              required="required"
              value={description}
         
              style={{ width: "80%"}}
            />
            </div>



            <div className='form-group'>
                <TextField
              id="outlined-basic"
              label="Room.No"
              variant="outlined"
              type="number"
              required="required"
              value={room}
         
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
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
          </div>


      <div className='form-group'>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Location</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          label="Location"
          style = {{width : "300px"}}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
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
          className={clsx(classes.margin, classes.textField)}
          InputProps={{
            startAdornment: <InputAdornment position="start">
                <AccountCircle/>
            </InputAdornment>,
          }}
          variant="outlined"
        />
            </div>
        
            <Button
        type="submit"
        variant="contained"
        color="darkseagreen"
      >
        Report Complain
      </Button>
        </form>



    )

    const { token, user } = isAuthenticated()
  
    return (
        
        <Layout title={`Welcome back ${isAuthenticated().user.name}. Add a new product and start shopping!`} description="Create Your Own Category" className='container'>
            <div className='row'>
                <div className='col-md-8 offset-md-2'>
                {showerror()}
                    {showloading()}
                    {showsuccess()}
                    {newform()}  
                </div>


            </div>

        </Layout>
    )
}

export default Report;