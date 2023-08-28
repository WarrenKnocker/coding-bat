/*
Given an array of ints, return true if the sequence of numbers 1, 2, 3 appears in the array somewhere.


array123([1, 1, 2, 3, 1]) → true
array123([1, 1, 2, 4, 1]) → false
array123([1, 1, 2, 1, 2, 3]) → true
*/

export function array123(inputArray: number[]): boolean {
  let result = false;
  for (let index = 0; index < 4; index++) {
    if (
      inputArray[index] == 1 &&
      inputArray[index + 1] == 2 &&
      inputArray[index + 2] == 3
    ) {
      result = true;
    }
  }
  return result;
}
