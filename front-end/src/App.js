//STYLING IMPORTS
import "../src/App.css";

//TECH IMPORTS 
import React, { useState } from "react";
import {Switch, Route, Link} from 'react-router-dom';

//COMP IMPORTS 
import Login from "./Components/Login";
import InstructorOnboarding from './Components/InstructorOnboarding'
import ClientOnboarding from './Components/ClientOnboarding'
import Register from "./Components/Register"
import CreateClass from "./Components/CreateClass";
import UpdateClass from "./Components/UpdateClass";
import FindClass from "./Components/FindClass";


function App() {

  //had to bring this up to application state to be able to use in other components since requests aren't working to accomplish this purpose just yet, originally component state in CreateClass
  const [classes, setClasses] = useState([]);

  return (
    <div>
      <Switch>
      <Route path = '/client-onboarding'>
          <ClientOnboarding />
        </Route>
        <Route path = '/instructor-onboarding'>
          <InstructorOnboarding />
        </Route>
        <Route path = "/register">
          <Register />
        </Route>
        <Route path="/create-class">
          <CreateClass classes={classes} setClasses={setClasses} />
        </Route>
        <Route path="/update-class/">
          <UpdateClass classes={classes} setClasses={setClasses} />
        </Route>
        <Route path="/find-class">
          <FindClass classes={classes} setClasses={setClasses} />
        </Route>
        <Route exact path ='/'>
          <h1>Anywhere Fitness - Making Fitness Easy</h1>
          <Link to="/">Home</Link>
          <Link to="/">Login</Link>
          <Link to="/register">Register</Link>
          <Login />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
