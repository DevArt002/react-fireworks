import React from 'react';

// Custom components load
import FireworksContainer from "../fireworks-container/fireworks-container"

// Style load
import './app.css';

function App() {
  return (
    <div className="App">
      <FireworksContainer play={true} />
    </div>
  );
}

export default App;
