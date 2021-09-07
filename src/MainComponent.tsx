import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import LandingPage from 'components/authentication/landingPage/LandingPage'


function MainComponent() {
    return (
        <div className="Main">
            <Router>
                <Switch>
                    <Route path="/" exact component={LandingPage} />
                    {/* <Route path="/userinfo" exact component={UserInfo} />
                    <Route path="/signup" exact component={Signup} />
                    <Route path="/login" exact component={Signin} />
                    <Route path="/feed" exact component={Application} /> */}
                </Switch>
            </Router>
        </div>
    )
}

export default MainComponent
