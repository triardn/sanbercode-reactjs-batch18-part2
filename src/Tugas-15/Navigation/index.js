import React from 'react';
import {Switch, Route} from 'react-router';

import Nav from './Nav';
import T9 from './../../Tugas-9/form';
import T10 from './../../Tugas-10/fruitList';
import T11 from './../../Tugas-11';
import T12 from './../../Tugas-12';
import T13 from './../../Tugas-13';
import T14 from './../../Tugas-14';

const Routes = () => {
    return (
        <div>
            <Nav />
            <Switch>
                <Route path="/tugas-9">
                    <T9 />
                </Route>
                <Route path="/tugas-10">
                    <T10 />
                </Route>
                <Route path="/tugas-11">
                    <T11 />
                </Route>
                <Route path="/tugas-12">
                    <T12 />
                </Route>
                <Route path="/tugas-13">
                    <T13 />
                </Route>
                <Route path="/tugas-14">
                    <T14 />
                </Route>
                <Route path="/">
                    <T9 />
                </Route>
            </Switch>
        </div>
    );
};

export default Routes;