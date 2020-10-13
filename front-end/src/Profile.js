import React, { useEffect, useState} from 'react';
import Layout from './core/Layout'
const Profile = ({match}) => {
    const [values,setvalues] = useState({
        name:'',
        email:'',
        password:'',
        error:'',
        success:false
    })

    const {name,email,password,error,success} = values


    const init = (uid) =>{
        console.log(uid)
    }

    useEffect (() => {
        init(match.params.uid)
    },[])
    return (
        <Layout
            title="Home Page"
            description="Update your profile"
            className="container-fluid"
        >
            
            
        </Layout>
    );
};

export default Profile;