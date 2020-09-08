import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import Layout from "../core/Layout";
import Header from "../core/Header";
import NavigationBar from "../core/NavigationBar";
import { Button } from 'reactstrap';

import { signin, authenticate, isAuthenticated } from "../auth";

const Signin = () => {
    const [values, setValues] = useState({
        email: "",
        password: "",
        error: "",
        loading: false,
        redirectToReferrer: false
    });

    const { email, password, loading, error, redirectToReferrer } = values;
    const { user } = isAuthenticated();

    const handleChange = name => event => {
        setValues({ ...values, error: false, [name]: event.target.value });
    };

    const clickSubmit = event => {
        event.preventDefault();
        setValues({ ...values, error: false, loading: true });
        signin({ email, password }).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error, loading: false });
            } else {
                authenticate(data, () => {
                    setValues({
                        ...values,
                        redirectToReferrer: true
                    });
                });
            }
        });
    };

    const signInForm = () => (
        <React.Fragment>
        {/* <Header /> */}
        {/* <NavigationBar /> */}
        <div className="login-form">
            <form action="/examples/actions/confirmation.php" method="post">
                <h2 className="text-center">Sign in</h2>       
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Email" required="required"  value={ email }  onChange={handleChange("email")}/>
                </div>
                <div className="form-group">
                    <input type="password" className="form-control" placeholder="Password" required="required" value={ password }  onChange={handleChange("password")} />
                </div>
                <div className="form-group">
                    <Button type="submit" className="btn btn-primary btn-block" onClick={clickSubmit}> Sign in</Button>
                </div>        
            </form>
            <p className="text-center"><a href="/signup">Create an Account</a></p>
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


