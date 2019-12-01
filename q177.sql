CREATE FUNCTION getNthHighestSalary(N INT) RETURNS INT
BEGIN
  DECLARE m INT;
  SET M = N-1;
  RETURN(
    SELECT distinct Salary
    FROM Employee
    ORDER BY Salary DESC
    LIMIT M, 1
  );
END