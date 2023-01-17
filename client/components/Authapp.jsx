import React, {useState}  from 'react';

import Home from '../pages/Home';
import Race from '../pages/Race';
import CharClass from '../pages/CharClass';
import Alignment from '../pages/Alignment';
import FinalChar from '../pages/FinalChar';

const Authapp = () => {
  const [race, setRace] = useState('');
  const [charClass, setCharClass] = useState('');
  const [alignment, setAlignment] = useState('');
  const [currentComponent, setCurrentComponent] = useState('home');

  const dndNames = ['Regdar', 'Todrdek', 'Alhandra', 'Eberk', 'Athain', 'Arthon', 'Kazak', 'Ragnara', 'Sandharrow', 'Morthos',]

  const switchComponent = (currentComponent, setCurrentComponent) => {
    switch(currentComponent) {
      case "home":
        return (<Home setCurrentComponent={setCurrentComponent}/>)
      case "race":
        return (<Race setCurrentComponent={setCurrentComponent} setRace={setRace}/>)
      case "charclass":
        return (<CharClass setCurrentComponent={setCurrentComponent} setCharClass={setCharClass}/>);
      case "alignment":
        return (<Alignment setCurrentComponent={setCurrentComponent} setAlignment={setAlignment}/>);
      case "finalChar":
        return (<FinalChar/>);
    };
  };

  return (
    <div>  
      {switchComponent(currentComponent, setCurrentComponent)}
    </div>
  );
}

export default Authapp;