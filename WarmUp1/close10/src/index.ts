/* 
Given 2 int values, return whichever value is nearest to the value 10, or return 0 in the event of a tie. Note that Math.abs(n) returns the absolute value of a number.


close10(8, 13) → 8
close10(13, 8) → 8
close10(13, 7) → 0
*/

export function close10(firstNum: number, secondNum: number): number {
  let firstDifference = Math.abs(firstNum - 10);
  let secondDifference = Math.abs(secondNum - 10);

  if (firstDifference == secondDifference) {
    return 0;
  } else if (firstDifference < secondDifference) {
    return firstNum;
  } else {
    return secondNum;
  }
}
