import React, { Component } from "react";
import Map3D from "./containers/3dMap";
// import MSInfo from "./statelessComps/minesweeperInfo";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <br />
          <Map3D className="map" />
          {/* <MSInfo /> */}
        </div>
      </div>
    );
  }
}

export default App;
