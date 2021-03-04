//TECH IMPORTS 
import React, { useState, useEffect } from "react";

//HELPER IMPORTS 
import axiosWithAuth from "../Helpers/axiosWithAuth";

const FindClass = () => {
  const [classesToFind, setClassesToFind] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("/api/users")
      .then((res) => {
        console.log("SUCCEEDED GETTING CLASSES FOR USER TO FILTER", res);
        //finish below function based on whether res is an array already or not
        // setClassesToFind(res.data)
      })
      .catch((err) => {
        console.log("FAILED GETTING CLASSES FOR USER TO FILTER", err);
      });
  }, []);

  //ORGANIZE BY EVENT HANDLERS

  const organizeClassTime = () => {
    classesToFind.filter((cls) => {
      return cls.startTime === "9AM";
    });
  };

  const organizeClassDuration = () => {
    classesToFind.filter((cls) => {
      return cls.classDuration >= 30;
    });
  };

  const organizeClassType = () => {
    return classesToFind.type.sort();
  };

  const organizeIntensityLevel = () => {
    return classesToFind.intensityLevel.sort();
  };

  const organizeClassLocation = () => {
    return classesToFind.location.sort;
  };

  //BEGIN FUNCTIONAL COMPONENT RETURN

  return (
    <div>
      <p>Find Classses</p>
      <button>Organize By Class Time</button>
      <button>Organize By Class Duration</button>
      <button>Organize By Class Type</button>
      <button>Organize By Intensity Level</button>
      <button>Organize By Class Location</button>
    </div>
  );
};

export default FindClass;