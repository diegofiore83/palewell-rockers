import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Players from './pages/Players';
import News from './pages/News';

const App = () => (
    <Switch>
        <Route component={Home} exact path="/" />
        <Route component={Players} path="/players" />
        <Route component={News} path="/news" />
    </Switch>
);

export default App;
