import React from 'react';
import { Switch, Route, Link, useHistory} from 'react-router-dom';

function PageOne(){
    const history = useHistory();
    const routeToPage2 = () =>{
        console.log('history', history)
        history.push('/client-onboarding/page2')
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
        history.push('/client-onboarding/page3')
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

export default function ClientOnboarding() {
    const history = useHistory();
    const routeToHome = () =>{
        console.log('history', history)
        history.push('/')
    }
    return(
        <div>
            <div onClick = {routeToHome} className="home-button">Exit</div>

            <Switch>
            <Route path = '/client-onboarding/page3'>
                    <PageThree />
                </Route>
                <Route path = '/client-onboarding/page2'>
                    <PageTwo />
                </Route>
                <Route path = '/client-onboarding'>
                    <PageOne />
                </Route>
            </Switch>
        </div>
    )
}