import React, { Component } from "react";
import classNames from "classnames";

let endMineSweeperGame = false;

class Cell extends Component {
  constructor(props) {
    super(props);
    this.state = { clicked: false, flag: "" };
  }
  handleClick(e) {
    let { row, column, cellsClicked } = this.props;
    if (!this.state.flag) this.setState({ clicked: true });
    if (!this.state.clicked) cellsClicked();
    if (!endMineSweeperGame) {
      //recursion cases
      if (this.props.value === "" && e.target.id === `${row}_${column}`) {
        e.target.id = `${row}_${column}_`;
        let rowList = [row - 1, row, row + 1];
        let colList = [column - 1, column, column + 1];
        for (let i of rowList) {
          for (let j of colList) {
            setImmediate(() => {
              if (document.getElementById(`${i}_${j}`))
                document.getElementById(`${i}_${j}`).click();
            });
          }
        }
      }
      //click bomb scenario --> end game
      if (this.props.value === "☀" && !this.state.flag) {
        endMineSweeperGame = true;
        e.target.style.backgroundColor = "black";
        let cols = e.target.parentElement.children.length;
        let rows = e.target.parentElement.parentElement.children.length;
        for (let i = 0; i < rows; i++) {
          for (let j = 0; j < cols; j++) {
            if (document.getElementById(`${i}_${j}`))
              document.getElementById(`${i}_${j}`).click();
          }
        }
      }
    }
  }
  handleContextMenu(e) {
    e.preventDefault();
    if (!this.state.clicked) {
      this.state.flag
        ? this.setState({ flag: "" })
        : this.setState({ flag: "⚑" });
    }
  }
  render() {
    let { row, column } = this.props;
    let cellsClass = classNames({
      cell: true,
      clicked: this.state.clicked,
      bomb: this.props.value === "☀"
    });
    return (
      <td
        id={`${row}_${column}`}
        className={cellsClass}
        onClick={this.handleClick.bind(this)}
        onContextMenu={this.handleContextMenu.bind(this)}
      >
        {this.state.clicked && !this.state.flag ? this.props.value : ""}
        {this.state.flag}
      </td>
    );
  }
}

export default Cell;
