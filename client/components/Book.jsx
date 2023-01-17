import React, { useCallback, useState }  from 'react';
import HTMLFlipBook from 'react-pageflip';
import Page from './Page';
import Home from '../pages/Home';
import Home2 from '../pages/Home2';
import Race from '../pages/Race';
import CharClass from '../pages/CharClass';
import Alignment from '../pages/Alignment';
import FinalChar from '../pages/FinalChar';

const Book = (props) => {
    const [race, setRace] = useState('');
    const [charClass, setCharClass] = useState('');
    const [alignment, setAlignment] = useState('');
    const [currentComponent, setCurrentComponent] = useState('home');

    const onFlip = useCallback(e => {

    });

    return (
        <HTMLFlipBook width={700} height={1000} size="stretch" onFlip={onFlip} >
            <Page><Home/></Page>
            <Page><Home2/></Page>
            <Page><Race setRace={setRace}/></Page>
            <Page><CharClass setCharClass={setCharClass}/></Page>
            <Page><Alignment setAlignment={setAlignment}/></Page>
            <Page></Page>
            <Page><FinalChar race={race} charClass={charClass} alignment={alignment} /></Page>
        </HTMLFlipBook>
    );
};

export default Book;
