import React from 'react';

const Race = ({setRace, setCurrentComponent}) => {
  const dndRace = [
    {Dwarf: 'You are between 4-5 ft, can live around 350 years, can see in the dark, are proficient with axes, and Constitution is increased by 2'},
    {Elf: 'You are between 5-6 ft, can live around 750 years, can see in the dark, have a keen sense helping with perception throws, and Dexterity is increased by 2'},
    {Halfling: 'You are 3ft, can live around 200 years, are extra nimble when sneaking around someone bigger than you, and Dexterity is increased by 2'},
    {Human: 'You are between 5.5-6.5 ft, can live around 90 years, and ability scores increase by 1'},
    {'Half-Orc': 'You are between 5.5-7 ft, can live around 70 years, can see in the dar, are more likely to cause intimidation, and Strengh is increased by 2 and Constitution is increased by 1'}
  ];

  return (<div>
            <h1>Choose Your Race</h1>
            <div className='race-grid'>
              {dndRace.map((obj, index) => (
                <div> 
                  <div className='name-check'>
                    <input type='radio' name='race' onChange={() => setRace( Object.keys(obj)[0])} />
                    <h2 className='name'>{Object.keys(obj)[0]}</h2>
                  </div>
                  <p className='description'>{Object.values(obj)[0]}</p>
                </div>
                ))}                         
            </div>
            <button className="randomChar" onClick={()=>{setCurrentComponent('home')}} >Home</button>
            <button className="randomChar" onClick={()=>{setCurrentComponent('charclass')}} >Next</button>
          </div>)
}

export default Race
