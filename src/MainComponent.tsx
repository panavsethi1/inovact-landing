import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Signup from './components/Signup'
import SignupForm from './components/SignupForm'
import LandingPage from './components/landingPage/LandingPage'

function MainComponent() {
    return (
        <div className="Main">
            <Router>
                <Switch>
                    <Route path="/" exact component={LandingPage} />
                    <Route path="/signup" exact component={Signup} />
                    <Route path="/form" exact component={SignupForm} />
                </Switch>
            </Router>
        </div>
    )
}

export default MainComponent