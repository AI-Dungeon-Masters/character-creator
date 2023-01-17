import React, { Component } from 'react';
import { useNavigate } from "react-router-dom";


const Class = () => {

    const dndClass = {
        0: {fighter: 'An expert in many fighting styles, proficient with all weapons and armor, d10 hit die, and focus on Strength and Dexterity'},
        1: {bard: 'An inspiring magician who uses song and charisma to get into and out of trouble, can use light armor and simple weapons, d8 hit die, and focus on Charisma'},
        2: {wizard: 'A scholar who is capable of manipulating the structures of reality, can use simple weapons but no armor, d6 hit die, and focus on Intelligence'},
        3: {rogue: 'A scoundral who uses stealth and trickery to overcome obstacles and enemies, can use light armor and most weapons, d8 hit die, and foucs on Dexterity'}
    }

    let navigate = useNavigate();

    const enter = () => {
        console.log('enter invoked')
        navigate('/alignment');
    }

    return (
        <div>
            <h1>Choose Your Class</h1>
            <button className="randomChar" onClick={enter}>Next</button>
        </div>
    )
}

export default Class