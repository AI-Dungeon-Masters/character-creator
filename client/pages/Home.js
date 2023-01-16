import React, { Component } from 'react';
import { useNavigate } from "react-router-dom";
// import FinalChar from './finalChar';
// import RandomChar from './randomChar';


const Home = () => {
    console.log('home')
    //method from react-router-dom that allows to send a new route
    let navigate = useNavigate();

    const enter = () => {
        console.log('enter invoked')
        navigate('/race');
    }



    return (
        <div>
            <h1>Welcome Home</h1>
            {/* <RandomChar/> */}
            <button className="randomChar" onClick={enter}>Create your character</button>
        </div>
    )
}

export default Home