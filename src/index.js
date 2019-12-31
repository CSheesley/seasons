import React from 'react';
import ReactDOM from 'react-dom';

// component determines location and month
const App = () => {
  window.navigator.geolocation.getCurrentPosition(
    // success callback
    (position) => console.log(position),
    (error) => console.log(error)
    // error callback
  );

  return(
    <div>Hello there!</div>
  );
};

ReactDOM.render(
  <App />, document.querySelector('#root')
)
