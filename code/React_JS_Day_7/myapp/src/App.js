import React from 'react'
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      name: "Atul",
      age: 20,
      role: "MERN Stack Developer",
    }
  }
  render() {
    console.log(this.state);

    return (
      <>
        <h4>My name is {this.state.name}</h4>
        <h4>My Age is {this.state.age}</h4>
        <h4>My Role is {this.state.role}</h4>

      </>
    )
  }
}

export default App;
