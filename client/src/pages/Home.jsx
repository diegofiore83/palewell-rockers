import React from 'react';
import { endpoints } from '../config/endpoints';

const Home = () => (
    <div className="app">
        <img alt='' id='fullSquad' src={`${endpoints.assets}/fullsquad.jpg`}/>
        <h2>The pitch:</h2>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2486.0134669227177!2d-0.26225388431904395!3d51.457909179627045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760e9367fc1053%3A0xc4f80fa9731ec8aa!2sPalewell+Playing+Fields!5e0!3m2!1sen!2suk!4v1532186836130" width="600" height="450" frameborder="0" id="mapIframe" title="Palewell Pitch" allowfullscreen></iframe>
    </div>  
);

export default Home;
