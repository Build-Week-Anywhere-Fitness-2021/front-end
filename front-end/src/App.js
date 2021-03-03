import React from "react";

import Login from "./Components/Login";

import {Switch, Route} from 'react-router-dom';
import InstructorOnboarding from './Components/InstructorOnboarding'
import ClientOnboarding from './Components/ClientOnboarding'
import Register from "./Components/Register"


function App() {

  return (
    <div>
      <Switch>
      <Route path = '/client-onboarding'>
          <ClientOnboarding />
        </Route>
        <Route path = '/instructor-onboarding'>
          <InstructorOnboarding />
        </Route>
        <Route exact path = '/'>
          <h1>Anywhere Fitness - Making Fitness Easy</h1>
        </Route>
      </Switch>
      <h1>Anywhere Fitness - Making Fitness Easy</h1>

      <Login />

      <Register/>

    </div>
  );
}

export default App;
