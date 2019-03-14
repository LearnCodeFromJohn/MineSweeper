import React, { Component } from "react";
import Cell from "./cell";
import {
  nestedArray,
  populateNestedArray,
  valsAdjacentCounts
} from "../helpers";
class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theMap: valsAdjacentCounts(
        populateNestedArray(nestedArray(10, 10), "☀", 10),
        "☀"
      ),
      cellsClicked: 0
    };
  }

  handleCellsClicked() {
    this.setState({ cellsClicked: ++this.state.cellsClicked });
    if (this.state.cellsClicked >= 90) alert("You have won!");
  }
  render() {
    return (
      <div>
        <table>
          <tbody>
            {this.state.theMap.map((item, row) => {
              return (
                <tr key={row} className="mapRow">
                  {item.map((subitem, col) => {
                    return (
                      <Cell
                        key={col}
                        row={row}
                        column={col}
                        value={subitem}
                        cellsClicked={this.handleCellsClicked.bind(this)}
                      />
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Map;
