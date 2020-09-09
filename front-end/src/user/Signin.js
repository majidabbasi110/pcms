import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import Layout from "../core/Layout";
import Header from "../core/Header";
import NavigationBar from "../core/NavigationBar";
//import { Button } from "reactstrap";
import { TextField, Button } from "@material-ui/core";
import { signin, authenticate, isAuthenticated } from "../auth";

const Signin = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    error: "",
    loading: false,
    redirectToReferrer: false,
  });

  const { email, password, loading, error, redirectToReferrer } = values;
  const { user } = isAuthenticated();

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const clickSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false, loading: true });
    signin({ email, password }).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error, loading: false });
      } else {
        authenticate(data, () => {
          setValues({
            ...values,
            redirectToReferrer: true,
          });
        });
      }
    });
  };

  const signInForm = () => (
    <React.Fragment>
      {/* <Header /> */}
      {/* <NavigationBar /> */}
      <div className="login-form" style={{ textAlign: "center" }}>
        <form noValidate autoComplete="off">
          <h2 className="text-center" style={{ padding: "15px" }}>
            Sign in
          </h2>
          <div className="form-group">
            <TextField
              id="Email"
              label="Email"
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
              label="Password"
              variant="outlined"
              type="text"
              required="required"
              value={password}
              onChange={handleChange("password")}
              style={{ width: "60%" }}
            />
          </div>
          <div className="form-group">
            <Button
              type="submit"
              variant="contained"
              color="primary"
              onClick={clickSubmit}
            >
              {" "}
              Sign in
            </Button>
          </div>
        </form>

        <p className="text-center">
          <a href="/signup">Create an Account</a>
        </p>
      </div>
    </React.Fragment>
  );

  const showError = () => (
    <div
      className="alert alert-danger"
      style={{ display: error ? "" : "none" }}
    >
      {error}
    </div>
  );

  const showLoading = () =>
    loading && (
      <div className="alert alert-info">
        <h2>Loading...</h2>
      </div>
    );

  const redirectUser = () => {
    if (redirectToReferrer) {
      if (user && user.role === 1) {
        return <Redirect to="/admin/dashboard" />;
      } else {
        return <Redirect to="/user/dashboard" />;
      }
    }
    if (isAuthenticated()) {
      return <Redirect to="/" />;
    }
  };

  return (
    <Layout
      title="Signin"
      description="Signin to PIA Complain Management System"
      className="container col-md-8 offset-md-2"
    >
      {showLoading()}
      {showError()}
      {signInForm()}
      {redirectUser()}
    </Layout>
  );
};

export default Signin;
