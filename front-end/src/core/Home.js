import React, { useState, useEffect } from "react";
import Layout from "./Layout";



 const Home = () => {
//     const [productsBySell, setProductsBySell] = useState([]);
//     const [productsByArrival, setProductsByArrival] = useState([]);
//     const [error, setError] = useState(false);

//     const loadProductsBySell = () => {
//         getProducts("sold").then(data => {
//             if (data.error) {
//                 setError(data.error);
//             } else {
//                 setProductsBySell(data);
//             }
//         });
//     };

//     const loadProductsByArrival = () => {
//         getProducts("createdAt").then(data => {
//             if (data.error) {
//                 setError(data.error);
//             } else {
//                 setProductsByArrival(data);
//             }
//         });
//     };

    // useEffect(() => {
    //     loadProductsByArrival();
    //     loadProductsBySell();
    // }, []);

    return (
        <Layout
            title="Home Page"
            description="Node React PIA App"
            className="container-fluid"
        >
            
            
        </Layout>
    );
};

export default Home;
