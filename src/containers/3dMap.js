// @flow

import React, { Component } from "react";
import CubeCell from "./cubeCell";
import ArrowPad from "./arrowPad";
import { Arr3D, populateArr3D, AdjCounts3D } from "../helpers/cubeMap";
import { rotateRight } from "../helpers/copyCube";

type Props = {};
type State = {
  cubeSize: number,
  bombCount: number,
  bombVal: string,
  theCube: Array<Array<Array<number | string>>>,
  cellsClicked: number
};

export default class Map3D extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    let cubeSize = 3;
    let bombCount = 3;
    let bombVal = "☀";
    this.state = {
      cubeSize,
      bombCount,
      bombVal,
      theCube: AdjCounts3D(
        populateArr3D(Arr3D(cubeSize, cubeSize, cubeSize), bombVal, bombCount),
        bombVal
      ),
      cellsClicked: 1
    };
  }

  arrowPad(arrow) {
    if (arrow === "right")
      this.setState({ theCube: rotateRight(this.state.theCube) });
    // else if (arrow === "left")
    // else if (arrow === "up")
    // else if (arrow === "down")
  }

  render() {
    let { theCube } = this.state;
    return (
      <div className="container">
        <div className="row">
          {theCube.map((yArr, x) => {
            return (
              <div key={x} className="col-sm-4 tableCol">
                <table className="table table-bordered">
                  <tbody>
                    {yArr.map((zArr, y) => {
                      return (
                        <tr key={y} className="cubeRow">
                          {zArr.map((val, z) => {
                            return (
                              <CubeCell key={z} x={x} y={y} z={z} val={val} />
                            );
                          })}
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            );
          })}
        </div>

        <ArrowPad arrowPad={this.arrowPad.bind(this)} />
      </div>
    );
  }
}
