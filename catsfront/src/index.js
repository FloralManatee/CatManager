import React from 'react';
import ReactDOM from 'react-dom';
import Cats from './components/cats';

function App() {
  return(
    <div>
      <Cats />
    </div>
  )
}

ReactDOM.render(
    <App />,
  document.getElementById('root')
);
