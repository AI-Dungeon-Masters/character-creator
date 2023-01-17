import React, { Component } from 'react';
import { useNavigate } from "react-router-dom";




const Race = (props) => {

    let navigate = useNavigate();

    const changeState = props.changeState;
    const setRace = props.setRace;
    const race = props.race;

    const dndRace = [
        {Dwarf: 'You are between 4-5 ft, can live around 350 years, can see in the dark, are proficient with axes, and Constitution is increased by 2'},
        {Elf: 'You are between 5-6 ft, can live around 750 years, can see in the dark, have a keen sense helping with perception throws, and Dexterity is increased by 2'},
        {Halfling: 'You are 3ft, can live around 200 years, are extra nimble when sneaking around someone bigger than you, and Dexterity is increased by 2'},
        {Human: 'You are between 5.5-6.5 ft, can live around 90 years, and ability scores increase by 1'},
        {'Half-Orc': 'You are between 5.5-7 ft, can live around 70 years, can see in the dar, are more likely to cause intimidation, and Strengh is increased by 2 and Constitution is increased by 1'}
    ];
    

    console.log(race)
    const enter = () => {
        console.log(race)
        navigate('/class');
    }
    return (
        <div>
            <h1>Choose your Race</h1>

            <div className='race characteristic-grid'>
               {
                    dndRace.map((obj, index) => (

                        <div>
                            <div className='name-check'>
                                <input type='radio' name='race' onChange={() => changeState(setRace, Object.keys(obj)[0])} />
                                <h2 className='name'>{Object.keys(obj)[0]}</h2>
                            </div>
                            <p className='description'>{Object.values(obj)[0]}</p>
                        </div>
                    ))
               }
               
            </div>

            <button className="randomChar" onClick={enter}>Next</button>

        </div>
    )
}

export default Race

