import React from 'react';
//import logo from './logo.svg';
import './App.css';
import PostRequest from './PostRequest';

class App extends React.Component {
  render() {
      return (
          <div className="App-header">
              <h3 className="App-link">React HTTP POST Requests with Axios</h3>
              <PostRequest />
          </div>
      );
  }
}

export default App;
