import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";


const Alignment = ({setAlignment, setCurrentComponent}) => {

    const dndAlignment = [
        {'Lawful-Good': 'You try and always follow the rules and do the right thing'},
        {'Lawful-Neutral': 'You always follow the rules, regardless of the outcome'},
        {'Lawful-Evil': 'You manipulate the rules in order to get others to do what you want'},
        {'Neutral-Good': 'You have a strong moral sense and do what you think is right regardless of the rules'},
        {'Neutral-Neutral': 'You just do your own thing'},
        {'Neutral-Evil': 'You do whatever you want and only focus on yourself'},
        {'Chaotic-Good': 'You will do whatever you think is right, and if you can break the laws doing so that\'s only a plus'},
        {'Chaotic-Neutral': 'You just love breaking rules and causing chaos'},
        {'Chaotic-Evil': 'You dream of a society that is run by anarchy and fear'}
    ]



    return (
        <div>
            <h1>Choose Your Alignment</h1>

            <div className='alignment-grid'>
               {
                    dndAlignment.map((obj, index) => (

                        <div>
                            
                            <div className='name-check'>
                                <input type='radio' name='alignment' onChange={() => setAlignment( Object.keys(obj)[0])} />
                                <h2 className='name'>{Object.keys(obj)[0]}</h2>
                            </div>
                            <p className='description' >{Object.values(obj)[0]}</p>
                        </div>
                    ))
               }
              
               
               
            </div>
            <button className="randomChar" onClick={()=>{setCurrentComponent('charclass')}} >Previous</button>
            <button className="randomChar" onClick={()=>{setCurrentComponent('finalChar')}} >Next</button>
           

        </div>
    )
            }
export default Alignment;