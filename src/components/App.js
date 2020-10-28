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
        {this.state.list.map((city, index) => (
          <ol key={`location${index + 1}`}>
            <li>{city}</li>
          </ol>
        ))}
      </div>
    );
  }
}

export default App;
