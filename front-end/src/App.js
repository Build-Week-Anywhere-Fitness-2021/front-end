import React from "react";
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
          <Register/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
