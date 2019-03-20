import React, { Component } from "react";
import classNames from "classnames";

type Props = {
  x: number,
  y: number,
  z: number,
  val: string | number,
  click: method
};
type State = {};
// let endMineSweeperGame = false;

export default class CubeCell extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }
  handleContextMenu(e: SyntheticMouseEvent<>) {}
  handleClick() {
    let { x, y, z, click } = this.props;
    click(x, y, z);
  }
  render() {
    let { x, y, z } = this.props;
    let cellsClass = classNames({
      cell: true,
      clicked: this.props.val >= 10 || this.props.val === "☀☀",
      bomb: this.props.val === "☀"
    });
    return (
      <td
        id={`${x}_${y}_${z}`}
        className={cellsClass}
        onClick={this.handleClick.bind(this)}
      >
        {this.props.val > 10 ? this.props.val - 10 : ""}
        {this.props.val === "☀☀" ? "☀" : ""}
        {/* {this.props.val} */}
      </td>
    );
  }
}
