import React from 'react';
import ReactDOM from 'react-dom';

// component determines location and month
class App extends React.Component {
  constructor (props) {
    super(props);

    this.state = { lat: null, lng: null };

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ lat: position.coords.latitude, lng: position.coords.longitude })
      },
      (error) => console.log(error)
    );
  }

  render() {
    return (
      <div className="coordinates">
        <div className="latitide">Latitude: { this.state.lat }</div>
        <div className="longitude">Longitude: { this.state.lng }</div>
      </div>
    );
  }
}


ReactDOM.render(
  <App />, document.querySelector('#root')
)
