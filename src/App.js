import React, { Component } from 'react';
import Main from './Main';
import Header from './Header';
import Sidebar from './Sidebar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="page-container">
          <Sidebar />
          <Main />
        </div>
      </div>
    );
  }
}

export default App;
