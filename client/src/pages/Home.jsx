import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import '../App.css';

const Home = () => (
    <div className="App">
        <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Link to="/players">Players</Link>
    </div>
);

export default Home;
