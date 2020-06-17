/*
You are given an n x n 2D matrix representing an image.

Rotate the image by 90 degrees (clockwise).

Note:

You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

Example 1:

Given input matrix = 
[
  [1,2,3],
  [4,5,6],
  [7,8,9]
],

rotate the input matrix in-place such that it becomes:
[
  [7,4,1],
  [8,5,2],
  [9,6,3]
]
Example 2:

Given input matrix =
[
  [ 5, 1, 9,11],
  [ 2, 4, 8,10],
  [13, 3, 6, 7],
  [15,14,12,16]
], 

rotate the input matrix in-place such that it becomes:
[
  [15,13, 2, 5],
  [14, 3, 4, 1],
  [12, 6, 8, 9],
  [16, 7,10,11]
]
*/
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  const count = Math.floor(matrix.length / 2)
  const size = matrix[0].length - 1

  for (let i = 0; i < count; i += 1) {
    for (let j = i; j < size - i; j += 1) {
      const temp = matrix[i][j]
      matrix[i][j] = matrix[size - j][i]
      matrix[size - j][i] = matrix[size - i][size - j]
      matrix[size - i][size - j] = matrix[j][size - i]
      matrix[j][size - i] = temp
    }
  }
  console.log(matrix)
};


rotate([
  [ 5, 1, 9,11, 2],
  [ 2, 4, 8,10, 4],
  [13, 3, 6, 7, 8],
  [15,14,12,16, 9],
  [ 4, 8, 8,10, 2],
])
// 5, 0 -> 0, 0 -> 0, 5 -> 5, 5
// 5, 1 -> 1, 0 -> 0, 4 -> 4, 5
// 4, 1 -> 1, 1 -> 1, 4 -> 4, 4