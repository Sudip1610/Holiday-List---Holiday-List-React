import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  render() {
    this.list = [
      "Goa",
      "Darjeeling",
      "Lonavala",
      "Amsterdam",
      "New York",
      "Tokyo"
    ];

    return (
      <div>
        {this.list.map((city, index) => (
          <ol key={`location${index + 1}`}>
            <li>{city}</li>
          </ol>
        ))}
      </div>
    );
  }
}

export default App;
