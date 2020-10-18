import React, { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../core/Layout";
import { TextField, Button } from "@material-ui/core";
import { update } from "../auth";

const Update = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
    success: false,
  });

  const { name, email, password, success, error } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const clickSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error : false });
    update({ name, email, password }).then((data) => {
      console.log(data)
      if (data.error) {
        setValues({ ...values, error: data.error, success: false });
      }
       else {
        setValues({
          ...values,
          name: "",
          email: "",
          password: "",
          error: "",
          success: true,
        });
      }
    });
  };

  const updateForm = () => (
    <form style={{ textAlign: "center" }} noValidate autoComplete="off">
      <h2 className="text-center" style={{ padding: "15px" }}>
        Update
      </h2>
      <div className="form-group">
        <TextField
          id="name"
          label="Update Name"
          variant="outlined"
          type="text"
          required="required"
          value={name}
          onChange={handleChange("name")}
          style={{ width: "60%" }}
        />
      </div>

      <div className="form-group">
        <TextField
          id="Email"
          label="Update Email"
          variant="outlined"
          type="text"
          required="required"
          value={email}
          onChange={handleChange("email")}
          style={{ width: "60%" }}
        />
      </div>

      <div className="form-group">
        <TextField
          id="password"
          label="Update Password"
          variant="outlined"
          type="password"
          required="required"
          value={password}
          onChange={handleChange("password")}
          style={{ width: "60%" }}
        />
      </div>
      <Button
        onClick={clickSubmit}
        type="submit"
        variant="contained"
        color="primary"
      >
        Update
      </Button>
    </form>
  );

  const showError = () => (
    <div
      className="alert alert-danger"
      style={{ display: error ? "" : "none" }}
    >
      {error}
    </div>
  );

  const showSuccess = () => (
    <div
      className="alert alert-info"
      style={{ display: success ? "" : "none" }}
    >
     Your Profile is update 
    </div>
  );

  return (
    <Layout
      title="Update"
      description="Update your profile"
      className="container col-md-8 offset-md-2"
    >
      {showSuccess()}
      {showError()}
      {updateForm()}
    </Layout>
  );
};

export default Update;
