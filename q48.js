/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  if (matrix.length <= 1) {
    return
  }

  const size = matrix.length
  const n = size - 1

  for (let i = 0; i < size / 2; i += 1) {
    for (let j = i; j < n - i; j++) {
      const temp = matrix[i][j]
      matrix[i][j] = matrix[n-j][i]
      matrix[n-j][i] = matrix[n-i][n-j]
      matrix[n-i][n-j] = matrix[j][n-i]
      matrix[j][n-i] = temp
    }
  }
};

const a = [
  [1,2,3],
  [4,5,6],
  [7,8,9],
];

rotate(a);

console.log(a);

/*
1 2 3     
4 5 6
7 8 9

7 4 1
8 5 2
9 6 3

0,0 -> 0,2         
0,1 -> 1,2
0,2 -> 2,2

1,0 -> 0,1
1,1 -> 1,1
1,2 -> 2,1

2,0 -> 0,0
2,1 -> 1,0
2,2 -> 2,0

0,0 -> 0,2 -> 2,2 -> 2,0 -> 0,0
0,1 -> 1,2 -> 2,1 -> 1,0 -> 0,1    i,j -> j,n-i -> n-i,n-j -> n-j,i -> i,j
1,1 -> 1,1


a b c d
e f g h
i j k l
m n o p

m i e a
n j f b
o k g c
p l h d

0,0 -> 0,3 -> 3,3 -> 3,0 -> 0,0

1,1 -> 1,2 -> 2,2 -> 2,1 -> 1,1
*/