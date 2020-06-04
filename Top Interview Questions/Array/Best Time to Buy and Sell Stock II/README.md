# Best Time to Buy and Sell Stock II

简单dp问题。

假设第n天的最大利润为`dp[n]`，则第n+1天的最大利润为：

1. 如果第n+1天的股价高于第n天，则`dp[n+1] = dp[n] + prices[n+1] - prices[n]`
2. 如果第n+1天的股价低于第n天，则`dp[n+1] = dp[n]`

状态转移方程为：

```javascript
dp[n] = prices[n] - prices[n-1] > 0 ? dp[n-1] + prices[n] - prices[n-1] : dp[n-1]
```

进一步化简可得：

```javascript
dp[n] = Math.max(dp[n-1], dp[n-1] + prices[n] - prices[n-1])
```

再化简可得：

```javascript
money = Math.max(money, money + prices[n] - prices[n - 1])
```
