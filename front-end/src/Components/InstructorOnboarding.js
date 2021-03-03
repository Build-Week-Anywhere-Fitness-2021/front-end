import React from 'react';
import { Switch, Route, useHistory} from 'react-router-dom';

function PageOne(){
    const history = useHistory();
    const routeToPage2 = () =>{
        console.log('history', history)
        history.push('/instructor-onboarding/page2')
    }
    return(
        <div>
            <h1 className = 'onboarding-title'>Page 1</h1>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse magna augue, faucibus ut viverra sit amet, scelerisque eu velit. 
            Nullam sed est sed nibh pretium convallis. Proin accumsan odio in nisi lobortis, sed lacinia felis luctus. Nullam maximus lacus a efficitur facilisis. 
            Sed volutpat vestibulum quam, sit amet pellentesque est pharetra id. Duis in tortor sit amet lectus euismod interdum a vitae augue. Mauris sodales 
            ac magna eu commodo. Sed posuere ultricies est. Nullam vehicula faucibus magna, a sodales massa posuere et. Mauris nulla felis, finibus nec egestas
            non, congue at ex. Morbi eu leo orci. Mauris non ligula vel metus efficitur maximus. Quisque nec nibh id sem cursus gravida. Donec nec est ut orci 
            ringilla ultricies. In ultrices suscipit orci a lobortis
            </p>
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