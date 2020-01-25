import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay'
import LoadingPage from './LoadingPage'

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

  renderContent() {
    if (this.state.lat && this.state.lng && !this.state.errorMessage) {
      return <SeasonDisplay lat={ this.state.lat } />
    }
    if (this.state.errorMessage) {
      return (
        <div className="error-message">Error: { this.state.errorMessage }</div>
      )
    }
    return <LoadingPage message="Waiting for User Location Information"/>
  }

  render() {
    return(
      <div className="generic-border-styling-class">
        { this.renderContent() }
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('#root'))
