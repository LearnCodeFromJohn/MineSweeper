// @flow
export function Arr3D(x: number, y: number, z: number) {
  let firArr: Array<Array<Array<number | string>>> = [];
  for (let i = 0; i < x; i++) {
    let secArr: Array<Array<number | string>> = [];
    for (let j = 0; j < y; j++) {
      let thirArr: Array<number | string> = [];
      for (let k = 0; k < z; k++) {
        thirArr.push("");
      }
      secArr.push(thirArr);
    }
    firArr.push(secArr);
  }
  return firArr;
}
export function populateArr3D(
  Arr3D: Array<Array<Array<number | string>>>,
  val: string | number,
  count: number
) {
  let Xlen = Arr3D.length;
  let Ylen = Arr3D[0].length;
  let Zlen = Arr3D[0][0].length;
  while (count) {
    let x = floorRand(Xlen);
    let y = floorRand(Ylen);
    let z = floorRand(Zlen);
    if (!Arr3D[x][y][z]) {
      Arr3D[x][x][z] = val;
      count--;
    }
  }
  return Arr3D;
}
export function AdjCounts3D(
  Arr3D: Array<Array<Array<number | string>>>,
  val: string | number
) {
  // console.log(Arr3D);
  let cubeLen = Arr3D.length;
  for (let i = 0; i < cubeLen; i++) {
    for (let j = 0; j < cubeLen; j++) {
      for (let k = 0; k < cubeLen; k++) {
        if (Arr3D[i][j][k] === val) {
          console.log("this here");
          Arr3D = incrAdjArr3D(Arr3D, val, i, j, k);
        }
      }
    }
  }
  return Arr3D;
}
function incrAdjArr3D(
  Arr3D: Array<Array<Array<number | string>>>,
  val: string | number,
  i: number,
  j: number,
  k: number
) {
  let iList = [i - 1, i, i + 1];
  let jList = [j - 1, j, j + 1];
  let kList = [k - 1, k, k + 1];
  for (let a of iList) {
    if (Arr3D[a] !== undefined) {
      for (let b of jList) {
        if (Arr3D[a][b] !== undefined) {
          for (let c of kList) {
            if (Arr3D[a][b][c] !== undefined && Arr3D[a][b][c] !== val) {
              if (typeof Arr3D[a][b][c] !== "number") {
                Arr3D[a][b][c] = 0;
              }
              Arr3D[a][b][c]++;
            }
          }
        }
      }
    }
  }
  return Arr3D;
}
function floorRand(scale: number) {
  return Math.floor(Math.random() * scale);
}
