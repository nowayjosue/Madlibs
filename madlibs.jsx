import React, { useState } from 'react';
import './Madlibs.css';

const Madlibs = () => {
  const [noun1, setNoun1] = useState('');
  const [noun2, setNoun2] = useState('');
  const [adjective, setAdjective] = useState('');
  const [color, setColor] = useState('');
  const [story, setStory] = useState('');

  const generateStory = () => {
    // Check if all fields are filled
    if (noun1 && noun2 && adjective && color) {
      const madlibStory = `There was a ${color} ${noun1} who loved a ${adjective} ${noun2}.`;
      setStory(madlibStory);
    } else {
      setStory('Please fill in all the fields.');
    }
  };

  return (
    <div className="madlibs-container">
      <h1>Madlibs!</h1>
      <div className="input-section">
        <label>Noun 1:</label>
        <input type="text" value={noun1} onChange={(e) => setNoun1(e.target.value)} />
      </div>
      <div className="input-section">
        <label>Noun 2:</label>
        <input type="text" value={noun2} onChange={(e) => setNoun2(e.target.value)} />
      </div>
      <div className="input-section">
        <label>Adjective:</label>
        <input type="text" value={adjective} onChange={(e) => setAdjective(e.target.value)} />
      </div>
      <div className="input-section">
        <label>Color:</label>
        <input type="text" value={color} onChange={(e) => setColor(e.target.value)} />
      </div>
      <button onClick={generateStory}>Get Story</button>
      <div className="output-section">
        <p>{story}</p>
      </div>
    </div>
  );
};

export default Madlibs;
