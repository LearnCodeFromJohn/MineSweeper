export function nestedArray(row, col) {
  let outerArray = [];
  for (let i = 0; i < row; i++) {
    let innerArray = [];
    for (let j = 0; j < col; j++) {
      innerArray.push("");
    }
    outerArray.push(innerArray);
  }
  return outerArray;
}
