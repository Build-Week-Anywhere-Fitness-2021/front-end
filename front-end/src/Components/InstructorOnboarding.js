import React, { useState, useEffect } from 'react';
import { Switch, Route, Link, useHistory} from 'react-router-dom';

function PageOne(){
    const history = useHistory();
    const routeToPage2 = () =>{
        console.log('history', history)
        history.push('/instructor-onboarding/page2')
    }
    return(
        <div>
            <h1>Page 1</h1>
            <div onClick = {routeToPage2} className="oboarding-button">Next</div>
        </div>
    )
}
function PageTwo(){
    const history = useHistory();
    const routeToPage3 = () =>{
        console.log('history', history)
        history.push('/instructor-onboarding/page3')
    }
    return(
        <div>
            <h1>Page 2</h1>
            <div onClick = {routeToPage3} className="oboarding-button">Next</div>
        </div>
    )
}
function PageThree(){
    return(
        <div>
            <h1>Page 3</h1>
        </div>
    )
}

export default function InstructorOnboarding() {
    const history = useHistory();
    const routeToHome = () =>{
        console.log('history', history)
        history.push('/')
    }
    return(
        <div>
            <div onClick = {routeToHome} className="home-button">Exit</div>

            <Switch>
            <Route path = '/instructor-onboarding/page3'>
                    <PageThree />
                </Route>
                <Route path = '/instructor-onboarding/page2'>
                    <PageTwo />
                </Route>
                <Route path = '/instructor-onboarding'>
                    <PageOne />
                </Route>
            </Switch>
        </div>
    )
}