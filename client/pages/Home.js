import React from 'react';
import { useNavigate } from "react-router-dom";
// import FinalChar from './finalChar';
// import RandomChar from './randomChar';
import intro from '../img/dnd-opening-picture3.png'

import styling from '../index.css'

const Home = ({ setCurrentComponent }) => {
    return (
        <div>
            <h1>Welcome Home</h1>
            {/* <RandomChar/> */}
            <button className="createChar" onClick={() => {setCurrentComponent('race')}}>Create your character</button>
            <img className='opening-img' src={intro}/>
        </div>
    )
}

export default Home