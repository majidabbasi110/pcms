import { API } from "../config";


export const getComplaints = async (userId, token) => {
  return await fetch("http://localhost:8000/api/admincomplaints", {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((error) => console.log(error));
};
