import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home } from '../../screens/Home/Home';
import { News } from '../../screens/News/News';
import { NewsDetail } from '../../screens/News/NewsDetal/NewsDetail';

export const Router = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route path="/noticias">
                <News/>
            </Route>
            <Route path="/noticia/:noticiaID">
                <NewsDetail/>
            </Route>
        </Switch>
    )
}