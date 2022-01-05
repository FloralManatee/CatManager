import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Cats from './components/cats';
import Test from './components/test';

function openList() {
  console.log("button clicked")
  document.getElementById('listComponent').style.display = "none";
}

function App() {
  const [showCats, setCats] = useState(false);
  const [showTest, setTest] = useState(false);
  return(
    <div>
      <div>
        <button className="option" onClick={() => setCats(!showCats)}>Cats on Record</button>
        <button className="option" onClick={() => setTest(!showTest)}>Record a new Cat</button>
        <button className="option">Update an existing Cat</button>
        <button className="option">Delete a Cat</button>
      </div>
      <div>
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
