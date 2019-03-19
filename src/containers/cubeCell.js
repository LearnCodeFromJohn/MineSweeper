import React, { Component } from "react";
import classNames from "classnames";

type Props = {
  x: number,
  y: number,
  z: number,
  val: string | number
};
type State = {
  clicked: boolean,
  flag: string
};
// let endMineSweeperGame = false;

export default class CubeCell extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { clicked: true, flag: "" };
  }
  handleClick({ target }: SyntheticMouseEvent<>) {
    this.setState({ clicked: true });
  }
  handleContextMenu(e: SyntheticMouseEvent<>) {}
  render() {
    let { x, y, z } = this.props;
    let cellsClass = classNames({
      cell: true,
      clicked: this.state.clicked,
      bomb: this.props.val === "☀"
    });
    return (
      <td
        id={`${x}_${y}_${z}`}
        className={cellsClass}
        onClick={this.handleClick.bind(this)}
      >
        {this.state.clicked && !this.state.flag ? this.props.val : ""}
        {/* {this.state.flag} */}
      </td>
    );
  }
}
