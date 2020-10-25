import { API } from "../config";
import queryString from "query-string";

export const update = user => {
    return fetch(`${API}/update`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => {
            console.log(err);
        });
};



export const list = params => {
    const query = queryString.stringify(params);
    console.log("query", query);
    return fetch(`${API}/products?${query}`, {
        method: "GET"
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};
