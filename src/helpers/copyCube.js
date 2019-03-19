import { Arr3D } from "./cubeMap";

export function rotateRight(OCube: Array<Array<Array<number | string>>>) {
  let newCube: Array<Array<Array<number | string>>>;
  let x = OCube.length;
  let y = OCube[0].length;
  let z = OCube[0][0].length;

  newCube = Arr3D(x, y, z);

  //   console.log(newCube);
  for (let i = 0; i < x; i++) {
    for (let j = 0; j < y; j++) {
      for (let k = 0; k < z; k++) {
        let new_i = OCube.length - k - 1;
        // console.log(i, j, k);
        // console.log(new_i, j, i);
        // console.log("----------");
        newCube[new_i][j][i] = OCube[i][j][k];
      }
    }
  }
  return newCube;
}
// export function rotateLeft(cube: Array<Array<Array<number | string>>>) {
//   let newCube: Array<Array<Array<number | string>>> = [];
// }
// export function rotateDown(cube: Array<Array<Array<number | string>>>) {
//   let newCube: Array<Array<Array<number | string>>> = [];
// }
// export function rotateUp(cube: Array<Array<Array<number | string>>>) {
//   let newCube: Array<Array<Array<number | string>>> = [];
// }

// function queueWrap() {
//   let storage = [];
//   let i = 0;
//   return {
//     add: val => {
//       storage.push(val);
//     },
//     dequeue: () => {
//       if (storage[i] === undefined) {
//         storage.length = 0;
//         i = 0;
//       } else {
//         i++;
//         return storage[i - 1];
//       }
//     }
//   };
// }
