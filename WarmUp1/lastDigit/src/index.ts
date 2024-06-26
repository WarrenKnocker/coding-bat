/*
Given two non-negative int values, return true if they have the same last digit, such as with 27 and 57. 
Note that the % "mod" operator computes remainders, so 17 % 10 is 7.
*/

export function lastDigit(firstNum: number, secondNum: number): boolean {
  return firstNum % 10 == secondNum % 10;
}
