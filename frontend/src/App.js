import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar';
import TodoList from './components/ItemList';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppNavbar />
        <TodoList />
      </div>
    );
  }
}

export default App;
