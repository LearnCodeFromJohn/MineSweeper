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
        <table>
          <tbody>
            <tr>
              <td />
              <td onClick={this.upArrow.bind(this)}> ↑ </td>
              <td />
            </tr>
            <tr>
              <td onClick={this.leftArrow.bind(this)}> ← </td>
              <td />
              <td onClick={this.rightArrow.bind(this)}> → </td>
            </tr>
            <tr>
              <td />
              <td onClick={this.downArrow.bind(this)}> ↓ </td>
              <td />
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
