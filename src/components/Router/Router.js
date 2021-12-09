import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home } from '../../screens/Home/Home';
import { News } from '../../screens/News/News';
import { NewsDetail } from '../../screens/News/NewsDetal/NewsDetail';
import { Autoridades } from '../../screens/Autoridades/Autoridades';
import { Organigrama } from '../../screens/Organigrama/Organigrama';
import { Gestion } from '../../screens/Gestion/Gestion';

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
            <Route path="/organigrama">
                <Organigrama/>
            </Route>
            <Route path="/Autoridades">
                <Autoridades/>
            </Route>
            <Route path="/Gestion">
                <Gestion/>
            </Route>
        </Switch>
    )
}