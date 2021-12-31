import React from 'react';
import ReactDOM from 'react-dom';
import CatDisplay from './components/cats';

function App() {
  return(
    <div>
      <CatDisplay />
    </div>
  )
}

ReactDOM.render(
    <App />,
  document.getElementById('root')
);
