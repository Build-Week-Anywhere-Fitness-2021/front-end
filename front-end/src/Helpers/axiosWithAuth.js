import React from "react";
import axios from "axios";

const axiosWithAuth = () => {
  const token = JSON.parse(localStorage.getItem("token"));
  return axios.create({
    headers: {
      Authorization: token
    },
    baseURL: "https://some1.herokuapp.com"
  });
};

export default axiosWithAuth;
