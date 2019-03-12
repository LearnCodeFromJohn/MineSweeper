/* eslint-disable no-unused-expressions */
import { LEFT_CLICK, RIGHT_CLICK } from "../actions";
import { nestedArray } from "../helpers";

let initialState = populateNestedArray(nestedArray(10, 10), 19, 10);

export default function(state = initialState, action) {
  if (action.payload) return action.payload;
  return state;
}

function populateNestedArray(nestedArray, val, count) {
  let rows = nestedArray.length;
  let cols = nestedArray[0].length;
  while (count) {
    count--;
    let y = floorRand(rows);
    let x = floorRand(cols);
    !nestedArray[y][x] ? (nestedArray[y][x] = val) : count++;
  }
  return nestedArray;
}

function floorRand(scale) {
  return Math.floor(Math.random() * scale);
}
// displays
9; //bomb
0;
1;
2;
3;
4;
5;
6;
7;
8;
// actuals
10 - 19;
// recursed --> // ??probability
