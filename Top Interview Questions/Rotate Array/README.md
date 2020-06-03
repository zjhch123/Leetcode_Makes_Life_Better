# Rotate Array

数组原地向后平移n位，要求空间复杂度O(1)

有个小技巧是这类问题(具体哪类我也说不清，需要多做题来感觉)一般都能找规律解决。

例如：`[1,2,3,4,5,6,7]`后移`3`位，最终会得到`[5,6,7,1,2,3,4]`

列出每个位置的元素变化情况：

```
from     to
0   ->   3
1   ->   4
2   ->   5
3   ->   6
6   ->   2
5   ->   1
4   ->   0
```

可以发现`0 -> 3 -> 6 -> 2 -> 5 -> 1 -> 4 -> 0`的变化规律，意思是0号数字换到3号，3号数字换到6号…位置每次都增加了`3`，如果超出了数组长度就取余。

因此可以很简单的写出第一版

```js
var rotate = function(nums, k) {
  let now = 0; // from
  let prev = nums[now] // from处的值
  let times = 0 // 交换次数

  while (times < nums.length) {
    const next = (now + k) % nums.length // to

    const element = nums[next] // to处的值，需要存储下来以供下一次交换使用
    nums[next] = prev

    prev = element
    now = next

    times += 1
  }
};
```

但是这个版本可能会出现循环交换的问题。如果数组长度是4，`k = 2`，每个元素的位置变化情况为

```
from     to
0   ->   2
2   ->   0
1   ->   3
3   ->   1
```

因此我们不能简单的无脑循环，需要用一个值来记录交换链的起点。当下一个位置等于交换链的起点时开启下一条交换链。

```js
var rotate = function(nums, k) {
  let now = 0,
      start = 0;
  let prev = nums[now]
  let times = 0

  while (times < nums.length) {
    const next = (now + k) % nums.length

    const element = nums[next]
    nums[next] = prev

    if (next === start) { // 下一个位置等于交换链的起点，开启下一条交换链
      now = next + 1
      start = now
      prev = nums[now]
    } else {
      prev = element
      now = next
    }

    times += 1
  }
};
```

另外这题还可以用更简单的方法解决，比如说`[1,2,3,4,5,6,7]`， `k = 3`，只需要：

1. reverse数组 -> `[7,6,5,4,3,2,1]`
2. reverse前3个数字 -> `[5,6,7,4,3,2,1]`
3. reverse后4个数字 -> `[5,6,7,1,2,3,4]`
