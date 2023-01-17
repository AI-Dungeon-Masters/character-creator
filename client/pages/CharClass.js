import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";


const CharClass = ({setCharClass, setCurrentComponent}) => {

    const dndClass = [
        {Fighter: 'An expert in many fighting styles, proficient with all weapons and armor, d10 hit die, and focus on Strength and Dexterity'},
        {Bard: 'An inspiring magician who uses song and charisma to get into and out of trouble, can use light armor and simple weapons, d8 hit die, and focus on Charisma'},
        {Wizard: 'A scholar who is capable of manipulating the structures of reality, can use simple weapons but no armor, d6 hit die, and focus on Intelligence'},
        {Rogue: 'A scoundral who uses stealth and trickery to overcome obstacles and enemies, can use light armor and most weapons, d8 hit die, and foucs on Dexterity'}
    ]

   



    return (
        <div>
            <h1>Choose Your Class</h1>

            <div className='class-grid'>
               {
                    dndClass.map((obj, index) => (

                        <div>
                            
                            <div className='name-check'>
                                <input type='radio' name='class' onChange={() => setCharClass( Object.keys(obj)[0])} />
                                <h2 className='name'>{Object.keys(obj)[0]}</h2>
                            </div>
                            <p className='description'>{Object.values(obj)[0]}</p>
                        </div>
                    ))
               }
              
               
               
            </div>
            <button className="randomChar" onClick={()=>{setCurrentComponent('race')}} >Previous</button>
            <button className="randomChar" onClick={()=>{setCurrentComponent('alignment')}} >Next</button>
           

        </div>
    )
}

export default CharClass