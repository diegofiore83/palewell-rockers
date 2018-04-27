import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';

const Home = () => (
    <div className="app">
        <div className="app-header">
            <img src={logo} className="app-logo" alt="logo" />
            <h2>Welcome to React</h2>
        </div>
        <p className="app-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Link to="/players">Players</Link>
        <br />
        <Link to="/news">News</Link>
    </div>
);

export default Home;
