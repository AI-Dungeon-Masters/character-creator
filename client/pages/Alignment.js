import React, { Component } from 'react';
import { useNavigate } from "react-router-dom";


const Alignment = () => {

    const dndAlignment = {
        0: {'Lawful-Good': 'You try and always follow the rules and do the right thing'},
        1: {'Lawful-Neutral': 'You always follow the rules, regardless of the outcome'},
        2: {'Lawful-Evil': 'You manipulate the rules in order to get others to do what you want'},
        3: {'Neutral-Good': 'You have a strong moral sense and do what you think is right regardless of the rules'},
        4: {'Neutral-Neutral': 'You just do your own thing'},
        5: {'Neutral-Evil': 'You do whatever you want and only focus on yourself'},
        6: {'Chaotic-Good': 'You will do whatever you think is right, and if you can break the laws doing so that\'s only a plus'},
        7: {'Chaotic-Neutral': 'You just love breaking rules and causing chaos'},
        8: {'Chaotic-Evil': 'You dream of a society that is run by anarchy and fear'},
    }

    let navigate = useNavigate();

    const enter = () => {
        console.log('enter invoked')
        navigate('/finalChar');
    }

    return (
        <div>
            <h1>Choose Your Alignment</h1>
            <button className="randomChar" onClick={enter}>Next</button>
        </div>
    )
}

export default Alignment