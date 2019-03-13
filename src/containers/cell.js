import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { rightClick, leftClick } from "../actions";
import classNames from "classnames";

class Cell extends Component {
  constructor(props) {
    super(props);
    this.state = { clicked: false };
  }
  componentDidMount() {
    // console.log(this.props);
    // let { value } = this.props;
  }
  handleClick() {
    this.setState({ clicked: true });
  }
  onContextMenu(e) {}
  render() {
    let cellsClass = classNames({
      cell: true
    });
    if (this.props.image !== undefined) {
      const images = "./src/static/images";
      let map_images = {
        0: "number0",
        1: "number1",
        2: "number2",
        3: "number3",
        4: "number4",
        5: "number5",
        6: "number6",
        7: "number7",
        8: "number8",
        9: "flag",
        10: "bomb"
      };
      let top = 50 + this.props.row * 25 + "px";
      let left = 500 + 25 * this.props.column + "px";
      var divStyle = {
        // backgroundImage: `url(${images}/${map_images[this.props.image]}.png)`,
        top,
        left
      };
    }
    return (
      <td
        className={cellsClass}
        style={divStyle}
        onClick={this.handleClick.bind(this)}
        onContextMenu={this.onContextMenu.bind(this)}
      >
        {this.state.clicked ? "" : this.props.value}
      </td>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ rightClick, leftClick }, dispatch);
}

export default connect(
  null,
  mapDispatchToProps
)(Cell);
