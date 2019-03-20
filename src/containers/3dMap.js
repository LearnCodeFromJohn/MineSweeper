// @flow

import React, { Component } from "react";
import CubeCell from "./cubeCell";
import ArrowPad from "./arrowPad";
import { Arr3D, populateArr3D, AdjCounts3D } from "../helpers/cubeMap";
import { rotateCube } from "../helpers/copyCube";
import { truncate } from "fs";

type Props = {};
type State = {
  cubeSize: number,
  bombCount: number,
  bombVal: string,
  theCube: Array<Array<Array<number | string>>>,
  cellsClicked: number,
  clickedMap: Object
};

export default class Map3D extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    let cubeSize = 4;
    let bombCount = 7;
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
    this.setState({ theCube: rotateCube(this.state.theCube, arrow) });
  }

  click(x, y, z) {
    if (this.state.theCube[x][y][z] < 10) {
      this.state.theCube[x][y][z] += 10;
      this.setState({ theCube: this.state.theCube });
    } else if (this.state.theCube[x][y][z] === "☀") {
      this.state.theCube[x][y][z] += "☀";
      this.setState({ theCube: this.state.theCube });
    }
  }

  render() {
    let {
      state: { theCube }
    } = this;
    return (
      <div>
        {theCube.map((yArr, x) => {
          return (
            <table key={x} className={"table table-bordered" + " table" + x}>
              <tbody>
                {yArr.map((zArr, y) => {
                  return (
                    <tr key={y} className="cubeRow">
                      {zArr.map((val, z) => {
                        return (
                          <CubeCell
                            click={this.click.bind(this)}
                            key={z}
                            x={x}
                            y={y}
                            z={z}
                            val={val}
                          />
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          );
        })}
        <ArrowPad arrowPad={this.arrowPad.bind(this)} />
      </div>
    );
  }
}
