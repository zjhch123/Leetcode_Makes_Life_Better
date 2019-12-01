select 
  Score,
  DENSE_RANK() over(order by Score desc) Rank
from Scores;