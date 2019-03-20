// @flow

import React, { Component } from "react";

type Props = {};
type State = {};

export default class ArrowPad extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  upArrow() {
    let { arrowPad } = this.props;
    arrowPad("up");
  }
  rightArrow() {
    let { arrowPad } = this.props;
    arrowPad("right");
  }
  leftArrow() {
    let { arrowPad } = this.props;
    arrowPad("left");
  }
  downArrow() {
    let { arrowPad } = this.props;
    arrowPad("down");
  }

  render() {
    return (
      <div>
        <table className="arrowPad">
          <tbody>
            <tr>
              <td className="hidden" />
              <td onClick={this.upArrow.bind(this)}> ↑ </td>
              <td className="hidden" />
            </tr>
            <tr>
              <td onClick={this.leftArrow.bind(this)}> ← </td>
              <td className="arrowPadMid"> </td>
              <td onClick={this.rightArrow.bind(this)}> → </td>
            </tr>
            <tr>
              <td className="hidden" />
              <td onClick={this.downArrow.bind(this)}> ↓ </td>
              <td className="hidden" />
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
