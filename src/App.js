import React, { Component } from "react";
import Map from "./containers/map";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <h1>MineSweeper</h1>
          <Map className="map" />
        </div>
        <p>This is how you play minesweeper</p>
      </div>
    );
  }
}

export default App;
