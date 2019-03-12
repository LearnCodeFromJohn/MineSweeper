import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {} from "../actions";
import Cell from "./cell";

class Map extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <table>
          <tbody>
            {this.props.theMap.map((item, row) => {
              return (
                <tr key={row} className="mapRow">
                  {item.map((subitem, col) => {
                    return (
                      <Cell key={col} row={row} column={col} value={subitem} />
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

function mapStateToProps({ theMap }) {
  return { theMap };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Map);
