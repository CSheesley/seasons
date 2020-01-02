import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay'

// component determines location and month
class App extends React.Component {
  state = { lat: null, errorMessage: '' };

  componentDidMount() {
    // best practice to do data loading here rather than constructor
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude, lng: position.coords.longitude }),
      (error)    => this.setState({ errorMessage: error.message })
    );
  }

  render() {
    if (this.state.lat && this.state.lng && !this.state.errorMessage) {
      return <SeasonDisplay lat={ this.state.lat } />
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
