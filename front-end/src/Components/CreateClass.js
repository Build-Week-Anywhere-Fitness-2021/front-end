//TECH IMPORTS 

import React, { useState, useReducer } from "react";
import styled from "styled-components";
import { initialState, reducer } from "../Reducer/reducer";

//HELPER IMPORTS 
import { createClass, updateClass, deleteClass } from "../Actions/actions";
import axiosWithAuth from "../Helpers/axiosWithAuth";

const CreateClass = () => {
  //UPON SUBMIT, SET STATE INTO CLASSES ARRAY
  const [classes, setClasses] = useState([]);
  const [newClassFormValues, setNewClassFormValues] = useState({
    name: "",
    type: "",
    startTime: "",
    duration: "",
    intensityLevel: "",
    location: "",
    registered: "",
    maxRegistered: "",
    date: "",
    id: "",
    isRegistered: true,
    isLoggedIn: true
  });

  //REDUCER / INITIAL STATE
  const [state, dispatch] = useReducer(reducer, initialState);

  //HANDLES CHANGES TO CREATE CLASS FORM INPUTS
  const createClassFormChange = (event) => {
    const { name, value } = event.target;

    setNewClassFormValues({
      ...newClassFormValues,
      [name]: value
    });
  };

  //HANDLES SUBMISSION OF CREATE CLASS FORM INPUTS
  const submitCreatedClass = (event) => {
    event.preventDefault();
    setClasses([...classes, newClassFormValues]);
    axiosWithAuth()
      .post("/api/auth/instructor/classes", classes)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteClass = (classToBeDeleted) => {
    axiosWithAuth()
      .delete(`/api/auth/instructor/classes/:id`, classToBeDeleted)
      .then((res) => {
        console.log("SUCCESSFULLY DELETED CLASS", res);
      })
      .catch((err) => {
        console.log("FAILED TO DELETE CLASS", err);
      });
  };

  return (
    <div>
      <CreateClassDiv>
        <h2>Create A Class</h2>
        <CreateClassForm onSubmit={submitCreatedClass}>
          <label htmlFor="name">
            Class Name:
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter A Class Name"
              value={newClassFormValues.name}
              onChange={createClassFormChange}
            />
          </label>

          <label htmlFor="type">
            Class Type:
            <input
              type="text"
              name="type"
              id="type"
              placeholder="Enter A Class Type"
              value={newClassFormValues.type}
              onChange={createClassFormChange}
            />
          </label>

          <label htmlFor="startTime">
            Start Time:
            <input
              type="text"
              name="startTime"
              id="startTime"
              placeholder="Enter A Class Start Time"
              value={newClassFormValues.startTime}
              onChange={createClassFormChange}
            />
          </label>

          <label htmlFor="name">
            Class Duration In Minutes:
            <input
              type="number"
              name="duration"
              id="duration"
              placeholder="Enter A Class Duration"
              value={newClassFormValues.duration}
              onChange={createClassFormChange}
            />
          </label>

          <label htmlFor="intensityLevel">
            Intensity Level:
            <input
              type="text"
              name="intensityLevel"
              id="intensityLevel"
              placeholder="Enter An Intensity Level"
              value={newClassFormValues.intensityLevel}
              onChange={createClassFormChange}
            />
          </label>

          <label htmlFor="location">
            Location:
            <input
              type="text"
              name="location"
              id="location"
              placeholder="Enter A Class Location"
              value={newClassFormValues.location}
              onChange={createClassFormChange}
            />
          </label>

          <label htmlFor="registered">
            Number Of People Registered:
            <input
              type="text"
              name="registered"
              id="registered"
              placeholder="Enter The Number Of People Registered"
              value={newClassFormValues.registered}
              onChange={createClassFormChange}
            />
          </label>

          <label htmlFor="maxRegistered">
            Max Number Of Registered Attendees:
            <input
              type="number"
              name="maxRegistered"
              id="maxRegistered"
              placeholder="Enter A Max Number"
              value={newClassFormValues.maxRegistered}
              onChange={createClassFormChange}
            />
          </label>

          <label htmlFor="date">
            Enter The Class Date:
            <input
              type="text"
              name="date"
              id="date"
              placeholder="Enter The Class Date"
              value={newClassFormValues.date}
              onChange={createClassFormChange}
            />
          </label>

          <label htmlFor="id">
            Enter A Unique 3 Digit Number-ID:
            <input
              type="number"
              name="id"
              id="id"
              placeholder="Enter A  Unique 3 Digit Number-ID"
              value={newClassFormValues.id}
              onChange={createClassFormChange}
            />
          </label>

          <button>Submit New Class</button>
        </CreateClassForm>
      </CreateClassDiv>
      <h2 style={{ textAlign: "center", fontSize: "2rem" }}>
        Current Classes:
      </h2>
      {classes.map((cls) => {
        return (
          <AllClasses>
            <h2>Class</h2>
            <p>Class Name: {cls.name}</p>
            <p>Class Type: {cls.type}</p>
            <p>Start Time: {cls.startTime}</p>
            <p>Class Duration: {cls.duration}</p>
            <p>Intensity Level: {cls.intensityLevel}</p>
            <p>Location: {cls.location}</p>
            <p>Number Of People Registered: {cls.registered}</p>
            <p>Max Number Of Attendees: {cls.maxRegistered}</p>
            <p>Class Date: {cls.date}</p>
            <p>Class ID: {cls.id}</p>
          </AllClasses>
        );
      })}
    </div>
  );
};

//STYLED COMPONENTS FOR CREATE CLASS AND CLASS LIST

const CreateClassDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.5rem;
  input,
  label {
    margin: 1rem;
  }
  input {
    border-radius: 0.75rem;
  }
`;
const CreateClassForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  button {
    border-radius: 1rem;
  }
`;
const AllClasses = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 2rem 2rem 3rem 0rem black;
  font-size: 1.5rem;
  margin: 1.5rem;
`;

//EXPORTS
export default CreateClass;