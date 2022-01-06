import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Cats from './components/cats';
import Test from './components/test';
import './style.css';

function App() {
  const [showCats, setCats] = useState(false);
  const [showTest, setTest] = useState(false);
  return(
    <div>
      <div id="header">
        <h1 id="companyName">Sparkle City Cat Adoptions</h1>
      </div>
      <nav id="nav">
        <button className="option" onClick={() => setCats(!showCats)}>Cats on Record</button>
        <button className="option">Find a Cat</button>
        <button className="option" onClick={() => setTest(!showTest)}>Record a new Cat</button>
        <button className="option">Update an existing Cat</button>
        <button className="option">Delete a Cat</button>
      </nav>
      <div id="componentDisplay">
        { showCats ? <Cats /> : null }
        { showTest ? <Test /> : null }
      </div>
    </div>
  )
}

ReactDOM.render(
    <App />,
  document.getElementById('root')
);
