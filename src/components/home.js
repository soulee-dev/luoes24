
import contents from '../main/contents.png';
import "../styles.css";
import React from 'react';
import { useNavigate } from "react-router-dom";

const intra_url = "https://signin.intra.42.fr/users/sign_in";

const Home = (props) => {
	const navigate = useNavigate();

	return (
  <div className='body'>
	<div className="App-content">
        <figure>
        <img src={contents} className="App-content" alt="content-bg"/>
        <figcaption><button className="App-btn" onClick={()=>navigate('Loading')}></button></figcaption>
        </figure>
      </div>
  </div>
	);
}

export default Home;