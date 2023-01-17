import React, { useEffect, useState } from 'react';

const FinalChar = ({ race, charClass, alignment }) => {
  const [story, setStory] = useState("Loading...");

  useEffect(() => {
    async function fetchData() {
      const data = await fetch('/AI/text', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: `Tell me an exciting story about a ${alignment} ${race} ${charClass}
                                        in 200 words.` })
      });
      const text = await data.json();
      setStory(text);
    };
    fetchData();
  });
    
  return (
    <div>
      <h1>Welcome to your final character</h1>
      {race}
      <br/>
      {charClass}
      <br/>
      {alignment}
      <br/>
      <br/>
      {story}
    </div>
  )
}

export default FinalChar

