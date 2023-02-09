import React from 'react';
import "../loading.css";
import { Link } from 'react-router-dom';

function Loading(props) {
    return (
		<div className='loading body'>
        <div className="loading">
            <span></span>
			<span></span>
			<span></span>
			<span></span>
        </div>
		</div>
    );
}

export default Loading;