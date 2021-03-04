//TECH IMPORTS 
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

//HELPER IMPORTS 
import axiosWithAuth from "../Helpers/axiosWithAuth";

//initial state for new slice of state
const initialClassState = {
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
};

const UpdateClass = (props) => {
  const [classToBeEdited, setClassToBeEdited] = useState(initialClassState);

  const params = useParams();

  //EFFECT LOADS CLASS UPON COMPONENT RENDER, THIS IS THE CLASS THAT GETS EDITED
  useEffect(() => {
    axiosWithAuth()
      .get(`/api/users/${params.id}`)
      .then((res) => {
        console.log("SUCCEEDED LOADING CLASS TO EDIT", res);
        setClassToBeEdited(res.data);
      })
      .catch((err) => {
        console.log("ERROR LOADING CLASS TO EDIT", err);
      });
  }, [params]);

  //HANDLES CHANGES ON FORM FOR EDITING A CLASS

  const handleEditFormChange = (event) => {
    const { name, value } = event.target;

    setClassToBeEdited({
      ...classToBeEdited,
      [name]: value
    });
  };

  //HANDLES SUBMISSION OF EDITED CLASS
  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    axiosWithAuth()
      .put(`/api/instructor/:id	`, classToBeEdited)
      .then((res) => {
        console.log("EDITED CLASS SUBMITTED SUCCESSFULLY", res);
        //ONCE INTEGRATED - make classes/setclasses application state and import through props
        //props.setClasses(res.data)
      })
      .catch((err) => {
        console.log("FAILED TO SUBMIT EDITED CLASS", err);
      });
  };

  //BEGIN FUNCTIONAL COMPONENT RETURN
  return (
    <div>
      <EditClassDiv>
        <h2>Edit A Class</h2>
        <EditClassForm onSubmit={handleEditFormSubmit}>
          <label htmlFor="name">
            Class Name:
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter A Class Name"
              value={classToBeEdited.name}
              onChange={handleEditFormChange}
            />
          </label>

          <label htmlFor="type">
            Class Type:
            <input
              type="text"
              name="type"
              id="type"
              placeholder="Enter A Class Type"
              value={classToBeEdited.type}
              onChange={handleEditFormChange}
            />
          </label>

          <label htmlFor="startTime">
            Start Time:
            <input
              type="text"
              name="startTime"
              id="startTime"
              placeholder="Enter A Class Start Time"
              value={classToBeEdited.startTime}
              onChange={handleEditFormChange}
            />
          </label>

          <label htmlFor="name">
            Class Duration In Minutes:
            <input
              type="number"
              name="duration"
              id="duration"
              placeholder="Enter A Class Duration"
              value={classToBeEdited.duration}
              onChange={handleEditFormChange}
            />
          </label>

          <label htmlFor="intensityLevel">
            Intensity Level:
            <input
              type="text"
              name="intensityLevel"
              id="intensityLevel"
              placeholder="Enter An Intensity Level"
              value={classToBeEdited.intensityLevel}
              onChange={handleEditFormChange}
            />
          </label>

          <label htmlFor="location">
            Location:
            <input
              type="text"
              name="location"
              id="location"
              placeholder="Enter A Class Location"
              value={classToBeEdited.location}
              onChange={handleEditFormChange}
            />
          </label>

          <label htmlFor="registered">
            Number Of People Registered:
            <input
              type="text"
              name="registered"
              id="registered"
              placeholder="Enter The Number Of People Registered"
              value={classToBeEdited.registered}
              onChange={handleEditFormChange}
            />
          </label>

          <label htmlFor="maxRegistered">
            Max Number Of Registered Attendees:
            <input
              type="number"
              name="maxRegistered"
              id="maxRegistered"
              placeholder="Enter A Max Number"
              value={classToBeEdited.maxRegistered}
              onChange={handleEditFormChange}
            />
          </label>

          <label htmlFor="date">
            Enter The Class Date:
            <input
              type="text"
              name="date"
              id="date"
              placeholder="Enter The Class Date"
              value={classToBeEdited.date}
              onChange={handleEditFormChange}
            />
          </label>

          <label htmlFor="id">
            Enter A Unique 3 Digit Number-ID:
            <input
              type="number"
              name="id"
              id="id"
              placeholder="Enter A Unique 3 Digit Number-ID:"
              value={classToBeEdited.id}
              onChange={handleEditFormChange}
            />
          </label>
          <button>Submit New Class</button>
        </EditClassForm>
      </EditClassDiv>
    </div>
  );
};

//STLED COMPONENTS FOR UPDATING / EDITING FORM
const EditClassDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.5rem;
  input,
  label {
    margin: 1rem;
  }
`;
const EditClassForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default UpdateClass;
