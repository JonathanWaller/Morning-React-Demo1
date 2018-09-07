// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

// export default App;

import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      people: [
        {
          name: "Joe",
          age: 18,
          occupation: "Teacher"
        },
        {
          name: "Billy",
          age: 40,
          occupation: "Dancer"
        },
        {
          name: "Doug",
          age: 30,
          occupation: "Doctor"
        },
        {
          name: "Josh",
          age: 25,
          occupation: "Lead Teacher"
        },
        {
          name: "Stacy",
          age: 23,
          occupation: "Zookeeper"
        },
        {
          name: "Lamar",
          age: 40,
          occupation: "Cowboy"
        }
      ],
      userInput: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(val) {
    this.setState({
      userInput: val
    });
  }

  render() {
    let list = this.state.people
      .filter(person => person.occupation.includes(this.state.userInput))
      .map((element, index) => {
        return (
          <div key={index} className="person_card">
            <h4>{element.name}</h4>
            <p>{element.age}</p>
            <p>{element.occupation}</p>
            <br />
          </div>
        );
      });

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Filter By Occupation</h1>
        </header>
        <input onChange={e => this.handleChange(e.target.value)} />
        {list}
      </div>
    );
  }
}

export default App;
