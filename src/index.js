import React from 'react';
import ReactDOM from 'react-dom';

// component determines location and month
class App extends React.Component {
  constructor (props) {
    super(props);

    this.state = { lat: null, lng: null, errorMessage: '' };

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ lat: position.coords.latitude, lng: position.coords.longitude })
      },
      (error) => {
        this.setState({ errorMessage: error.message})
      }
    );
  }

  render() {
    if (this.state.lat && this.state.lng && !this.state.errorMessage) {
      return (
        <div className="coordinates">
          <div className="latitide">Latitude: { this.state.lat }</div>
          <div className="longitude">Longitude: { this.state.lng }</div>
        </div>
      )
    }

    if (this.state.errorMessage) {
      return (
        <div className="error-message">Error: { this.state.errorMessage }</div>
      )
    }

    return <div className="loading">Loading!</div>
  }
}


ReactDOM.render(
  <App />, document.querySelector('#root')
)
