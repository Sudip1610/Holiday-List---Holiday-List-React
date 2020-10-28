import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.list = [
      "Goa",
      "Darjeeling",
      "Lonavala",
      "Amsterdam",
      "New York",
      "Tokyo"
    ];
  }
  render() {
    return (
      <div>
        <ol>
          {this.list.map((city, index) => (
            <li>{city}</li>
          ))}
        </ol>
      </div>
    );
  }
}

export default App;
