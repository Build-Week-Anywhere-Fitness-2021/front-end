import React from "react";
import axios from "axios";

const axiosWithAuth = () => {
  const token = JSON.parse(localStorage.getItem("token"));
  return axios.create({
    headers: {
      Authorization: token
    },
    baseURL: "https://af-backend-t.herokuapp.com/"
  });
};

export default axiosWithAuth;


//base URLs for different backends to try out 
// Karla https://some1.herokuapp.com
// Tara  https://af-backend-t.herokuapp.com/