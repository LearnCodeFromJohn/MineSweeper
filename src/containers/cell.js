import React, { Component } from "react";
import classNames from "classnames";

class Cell extends Component {
  constructor(props) {
    super(props);
    this.state = { clicked: false };
  }
  handleClick() {
    if (!this.state.flag) this.setState({ clicked: true });
  }
  onContextMenu(e) {
    e.preventDefault();
    if (!this.state.clicked) {
      if (!this.state.flag) this.setState({ flag: "⚑" });
      else this.setState({ flag: "" });
    }
  }
  render() {
    let cellsClass = classNames({
      cell: true,
      clicked: this.state.clicked
    });
    return (
      <td
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
