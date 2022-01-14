import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
  state = {
    latitude: 0,
    errorMsg: '',
  };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ latitude: position.coords.latitude }),
      (err) => this.setState({ errorMsg: err.message }),
    );
  }

  render() {
    const { latitude, errorMsg } = this.state;

    return (
      <main>
        {errorMsg ? (
          <h1>Error: {errorMsg}</h1>
        ) : latitude ? (
          <SeasonDisplay latitude={latitude} />
        ) : (
          <Spinner message="Please accept location request" />
        )}
      </main>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
