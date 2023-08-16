/* 

Given 2 positive int values, return the larger value that is in the range 10..20 inclusive, or return 0 if neither is in that range.


max1020(11, 19) → 19
max1020(19, 11) → 19
max1020(11, 9) → 11
*/

export function max1020(firstNum: number, secondNum: number): number {
  if (
    (firstNum >= 10 && firstNum <= 20) ||
    (secondNum >= 10 && secondNum <= 20)
  ) {
    if (firstNum > secondNum) {
      return firstNum;
    } else {
      return secondNum;
    }
  } else {
    return 0;
  }
}
