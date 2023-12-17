import React, { useState } from 'react';
import '../styles/App.css';

const App = () => {
  const [isRed, setIsRed] = useState(true);

  const toggleStyle = () => {
    setIsRed(prevState => !prevState);
  };

  return (
    <div id="main">
      <p className={isRed ? 'redColor' : 'blueColor'}>Newton School</p>
      <button id='button' onClick={toggleStyle}>Change Style</button>
    </div>
  );
};

export default App;
