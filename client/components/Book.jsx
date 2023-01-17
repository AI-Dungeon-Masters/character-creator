import React  from 'react';
import HTMLFlipBook from 'react-pageflip';
import Page from './Page';
import Home from '../pages/Home';
import Home2 from '../pages/Home2';
import Race from '../pages/Race';
import CharClass from '../pages/CharClass';
import Alignment from '../pages/Alignment';
import FinalChar from '../pages/FinalChar';

const Book = (props) => {
    return (
        <HTMLFlipBook width={300} height={500}>
            <Page number="1"><Home/></Page>
            <Page number="2"><Home2/></Page>
            <Page number="3"><Race/></Page>
            <Page number="4"><CharClass/></Page>
            <Page number="5"><Alignment/></Page>
            <Page number="6"><FinalChar/></Page>
        </HTMLFlipBook>
    );
};

export default Book;
