import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      data:[]
    }
  }
  componentDidMount(){
    fetch('http://localhost:3001/lol')
      .then(response => response.json())
      .then((data) => this.setState({data}))
      .catch( err => console.log(err))
  }
  render() {
    console.log('this.state.data', this.state.data);
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          Here's some stuff from the postgreSQL db, using express, and react
        </p>
        {(this.state.data.length > 0) ? this.state.data.map((pic) => {
          return <img src={pic.url} alt ="pic" />
        }) : <p> No database detected</p>}
      </div>
    );
  }
}

export default App;
