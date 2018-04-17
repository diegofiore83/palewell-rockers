import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Players from './pages/Players';

const App = () => (
    <Switch>
        <Route component={Home} exact path="/" />
        <Route component={Players} path="/players" />
    </Switch>
);

export default App;
