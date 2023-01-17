import React, { useEffect, useState } from 'react';

const FinalChar = ({ race, charClass, alignment }) => {
  const [story, setStory] = useState("Loading...");
  const [image, setImage] = useState(null);

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
    async function fetchImageData() {
      const imageUrlData = await fetch('/AI/image', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: `${alignment} ${race} ${charClass} tarot card Frank Frazetta` })
      });

      const imageUrl = await imageUrlData.json();
      setImage(imageUrl);
    }

    if(story === "Loading...") {
      fetchData();
    };

    if(!image) {
      fetchImageData();
    };
    
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
      <br/>
      <br/>
      <img src={image} width="512" height="512"/>
    </div>
  )
}

export default FinalChar

