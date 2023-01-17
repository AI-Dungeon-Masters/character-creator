import React from 'react';
import { useNavigate } from "react-router-dom";
// import FinalChar from './finalChar';
// import RandomChar from './randomChar';
import intro from '../img/image_part_002.png'

import styling from '../index.css'

const Home = ({ setCurrentComponent }) => {
    return (
        <div>
            {/* <RandomChar/> */}
            <img className='opening-img' src={intro}/>
        </div>
    )
}

export default Home