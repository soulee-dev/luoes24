import React from 'react';
import origin from '../main/origin.png';
import { Link } from 'react-router-dom';

const github_url = "https://github.com/chobinee/chobinee";

function Footer(props) {
    return (
        <div className="App-footer">
            <Link to="">
            <img src={origin} className="App-origin" alt="origin" onClick={()=>window.open(github_url)}></img>
            </Link>
        </div>
    );
}

export default Footer;