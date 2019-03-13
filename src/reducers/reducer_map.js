/* eslint-disable no-unused-expressions */
import { LEFT_CLICK, RIGHT_CLICK } from "../actions";
import { nestedArray } from "../helpers";

let initialState = valsAdjacentCounts(
  populateNestedArray(nestedArray(10, 10), 9, 10),
  9
);

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

function valsAdjacentCounts(nestedArray, val) {
  for (let i = 0; i < nestedArray.length; i++) {
    for (let j = 0; j < nestedArray[0].length; j++) {
      if (nestedArray[i][j] === val) {
        nestedArray = addOneNestedArrAdjacents(nestedArray, i, j);
      }
    }
  }
  return nestedArray;
}

function floorRand(scale) {
  return Math.floor(Math.random() * scale);
}

function addOneNestedArrAdjacents(nestedArray, i, j) {
  let iList = [i - 1, i, i + 1];
  let jList = [j - 1, j, j + 1];
  for (let a of iList) {
    for (let b of jList) {
      if (nestedArray[a]) {
        if (nestedArray[a][b] !== undefined) {
          if (typeof nestedArray[a][b] != "number") nestedArray[a][b] = 0;
          if (nestedArray[a][b] !== 9) nestedArray[a][b]++;
        }
      }
    }
  }
  return nestedArray;
}
// displays
9; //bomb
0; //is empty string
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
