/*
We'll say that a number is "teen" if it is in the range 13..19 inclusive. Given 3 int values, return true if 1 or more of them are teen.


hasTeen(13, 20, 10) → true
hasTeen(20, 19, 10) → true
hasTeen(20, 10, 13) → true
*/

export function hasTeen(
  firstNum: number,
  secondNum: number,
  thirdNum: number
): boolean {
  return (
    (firstNum >= 13 && firstNum >= 19) ||
    (secondNum >= 13 && secondNum >= 19) ||
    (thirdNum >= 13 && thirdNum >= 19)
  );
}
