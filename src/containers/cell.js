import React, { Component } from "react";
import classNames from "classnames";

class Cell extends Component {
  constructor(props) {
    super(props);
    this.state = { clicked: false };
    this.recursed = false;
  }
  handleClick() {
    if (!this.state.flag) this.setState({ clicked: true });
    if (this.props.value === "" && !this.recursed) {
      this.recursed = true;
      let { row, column } = this.props;
      let rowList = [row - 1, row, row + 1];
      let colList = [column - 1, column, column + 1];
      for (let i of rowList) {
        for (let j of colList) {
          if (
            document.getElementById(`${i}_${j}`) &&
            !(row === i && column === j)
          ) {
            document.getElementById(`${i}_${j}`).click();
          }
        }
      }
    }
  }
  onContextMenu(e) {
    e.preventDefault();
    if (!this.state.clicked) {
      if (!this.state.flag) this.setState({ flag: "⚑" });
      else this.setState({ flag: "" });
    }
  }
  render() {
    let { row, column } = this.props;
    let cellsClass = classNames({
      cell: true,
      clicked: this.state.clicked
    });
    return (
      <td
        id={`${row}_${column}`}
        className={cellsClass}
        onClick={this.handleClick.bind(this)}
        onContextMenu={this.onContextMenu.bind(this)}
      >
        {this.state.clicked && !this.state.flag ? this.props.value : ""}
        {this.state.flag}
      </td>
    );
  }
}

export default Cell;
