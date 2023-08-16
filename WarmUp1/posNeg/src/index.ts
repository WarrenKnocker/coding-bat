/* 

Given 2 int values, return true if one is negative and one is positive. Except if the parameter "negative" is true, then return true only if both are negative.

posNeg(1, -1, false) → true
posNeg(-1, 1, false) → true
posNeg(-4, -5, true) → true
*/

export function posNeg(
  firstNum: number,
  secondNum: number,
  isNegative: boolean
): boolean {
  if (isNegative) {
    return firstNum < 0 && secondNum < 0;
  } else {
    return (firstNum < 0 && secondNum > 0) || (secondNum < 0 && firstNum > 0);
  }
}
