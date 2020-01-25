import React from 'react'

// functional component - limit to returning html
const LoadingPage = (props) => {
  return (
    <div className="ui active dimmer">
      <div className="ui text loader">{ props.message }</div>
    </div>
  );
};

LoadingPage.defaultProps = {
  message: 'Loading...'
}

export default LoadingPage;
