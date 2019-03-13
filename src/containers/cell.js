import React, { Component } from "react";
import classNames from "classnames";

class Cell extends Component {
  constructor(props) {
    super(props);
    this.state = { clicked: false };
  }
  handleClick(e) {
    if (!this.state.flag) this.setState({ clicked: true });
    let { row, column } = this.props;
    if (this.props.value === "") {
      e.target.id = `${row}_${column}_`;
      let rowList = [row - 1, row, row + 1];
      let colList = [column - 1, column, column + 1];
      for (let i of rowList) {
        for (let j of colList) {
          if (
            document.getElementById(`${i}_${j}`) &&
            !(row === i && column === j)
          ) {
            setImmediate(() => {
              if (document.getElementById(`${i}_${j}`))
                document.getElementById(`${i}_${j}`).click();
            });
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
      clicked: this.state.clicked,
      bomb: this.props.value === "☀"
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
