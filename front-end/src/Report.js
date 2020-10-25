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
import {postcomplain} from './ApiUser'

const { token, user } = isAuthenticated()


const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

  console.log(user._id)

const Report = () => {
    const classes = useStyles();
    const [values, setValues] = useState({
        userid:'',
        name: '',
        pno:'',
        description: '',
        category: '',
        categories: [],
        room: '',
        building: '',
        photo: '',
        loading: false,
        error: '',
        createdproduct: '',
        formdata: new FormData(),
        redirectto: false,
    })
    
    const { name,
      userid,
        pno,
        description,
        category,
        categories,
        room,
        building,
        loading,
        error,
        createdcomplain,
        formdata,
        redirectto } = values
        
        const handlechange = name => event => {
          console.log(name,pno)
          const value = name === 'photo' ? event.target.files[0] : event.target.value
          formdata.set(name, value)
         
          setValues({ ...values , [name]: value })
      } 
      const submitHandler =  async (event) => {
        event.preventDefault()
        setValues({ ...values, error: '', loading: true })
        formdata.set('userid',user._id);
          formdata.set('name',user.name)
       await postcomplain(user._id, token, formdata).then(data => {
           console.log(data)
            if (data.error) {
                setValues({ ...values, error: data.error })
            }
            else {
                setValues({
                    userid:'',
                    name: '',
                    price: '',
                    description: '',
                    building: '',
                    room:'',
                    category:'',
                    pno:'',
                    photo: '',
                    loading: false,
                    createdcomplain: data.data.name ,
                })
            }
        })
    }

    
    const showerror = () =>(
        <div className = 'alert alert-danger' style={{display : error ?  '' :'none' }}>
            {error}
        </div>
    )
    const showsuccess = () =>(
        <div className = 'alert alert-info' style={{display : createdcomplain ?  '' :'none' }}>
         <h2>   {`${createdcomplain}`} your complain has now been forwarded</h2>
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
              value={user.name}
              disabled="disabled"
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
              onChange={handlechange('description')}
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
              onChange={handlechange('room')}
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
          value={category}
          onChange={handlechange('category')}
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
        <InputLabel id="demo-simple-select-outlined-label">Building</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          label="Location"
          style = {{width : "300px"}}
          value={building}
          onChange={handlechange('building')}
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

      <div className="form-group">
        <TextField
          id="filled-multiline-static"
          label="Description"
          variant="outlined"
          type="text"
          required="required"
          value={description}
          onChange={handlechange("description")}
          style={{ width: "80%" }}
        />
      </div>

      <div className="form-group">
        <TextField
          id="outlined-basic"
          label="Room.No"
          variant="outlined"
          type="number"
          required="required"
          value={room}
          onChange={handlechange("room")}
          style={{ width: "80%" }}
        />
      </div>

      <div className="form-group">
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="demo-simple-select-outlined-label">
            Select your complain type
          </InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            label="Select your complain type"
            style={{ width: "300px" }}
            value={category}
            onChange={handlechange("category")}
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

      <div className="form-group">
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="demo-simple-select-outlined-label">
            Building
          </InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            label="Location"
            style={{ width: "300px" }}
            value={building}
            onChange={handlechange("building")}
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

      <div className="form-group">
        <TextField
          label="P.NO"
          id="outlined-start-adornment"
          type="number"
          required="required"
          style={{right:"10px"}}
          value={pno}
          onChange={handlechange('pno')}
          className={clsx(classes.margin, classes.textField)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
          variant="outlined"
        />
      </div>

      <Button
        type="submit"
        variant="contained"
        color="darkseagreen"
        onClick={submitHandler}
      >
        Report Complain
      </Button>
    </form>
  );

  const { token, user } = isAuthenticated();
  console.log(user._id);
  return (
    <Layout
      title={`Welcome back ${
        isAuthenticated().user.name
      }. Please Register Your Complaint Here!`}
      description="Create Your Own Category"
      className="container"
    >
      <div className="row">
        <div className="col-md-8 offset-md-2">
          {showerror()}
          {showloading()}
          {showsuccess()}
          {newform()}
        </div>
      </div>
    </Layout>
  );
};



export default Report;
