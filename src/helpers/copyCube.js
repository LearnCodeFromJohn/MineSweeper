import { Arr3D } from "./cubeMap";

export function rotateCube(
  OCube: Array<Array<Array<number | string>>>,
  direction: string
) {
  let newCube: Array<Array<Array<number | string>>>;
  let x = OCube.length;
  let y = OCube[0].length;
  let z = OCube[0][0].length;

  newCube = Arr3D(x, y, z);

  //   console.log(newCube);
  for (let i = 0; i < x; i++) {
    for (let j = 0; j < y; j++) {
      for (let k = 0; k < z; k++) {
        // console.log(i, j, k);
        // console.log(new_i, j, i);
        // console.log("----------");
        if (direction === "right") {
          let new_i = x - k - 1;
          newCube[new_i][j][i] = OCube[i][j][k];
        } else if (direction === "left") {
          let new_k = x - i - 1;
          newCube[k][j][new_k] = OCube[i][j][k];
        } else if (direction === "up") {
          let new_i = x - j - 1;
          newCube[new_i][i][k] = OCube[i][j][k];
        } else if (direction === "down") {
          let new_j = x - i - 1;
          newCube[j][new_j][k] = OCube[i][j][k];
        }
      }
    }
  }
  return newCube;
}

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
