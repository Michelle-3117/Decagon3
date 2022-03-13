function transpose(arr) {
  return arr[0].map((i, column) => arr.map(row => row[i]))
}
function transpose(arr) {
  return arr[0].map((col, c) => arr.map((row, r) => arr[r][c]));
}
console.log(transpose([
  [5, 12, 17, 9, 3],
  [13, 4, 8, 14, 1],
  [9, 6, 3, 7, 21],
]));


module.exports = transpose
