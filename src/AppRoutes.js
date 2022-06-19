import React from 'react'
import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css'

import Home from './Pages/Home'
import Reviews from './Pages/Reviews'
import Contacts from './Pages/Contacts'
import { Route, Switch, Redirect } from 'react-router-dom'

export const AppRoutes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/reviews" component={Reviews} />
            <Route exact path="/contacts" component={Contacts} />
            <Route
                path="*"
                render={({ location }) => {
                    return (
                        <Redirect
                            to={{
                                pathname: '/',
                                from: location,
                            }}
                        />
                    )
                }}
            />
        </Switch>
    )
}
