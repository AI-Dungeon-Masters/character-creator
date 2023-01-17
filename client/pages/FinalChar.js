import React, { Component } from 'react';

const FinalChar = ({ race, charClass, alignment }) => {
    console.log('made in to FinalChar')
    return (
        <div>
            <h1>Welcome to your final character</h1>
            {race}
            {charClass}
            {alignment}
        </div>
    )
}

export default FinalChar

