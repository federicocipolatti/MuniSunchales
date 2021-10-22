import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home } from '../../screens/Home/Home';
import { News } from '../../screens/News/News';

export const Router = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route path="/news">
                <News/>
            </Route>
        </Switch>
    )
}