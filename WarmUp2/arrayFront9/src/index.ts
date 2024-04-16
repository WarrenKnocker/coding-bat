/*
Given an array of ints, return true if one of the first 4 elements in the array is a 9. The array length may be less than 4.


arrayFront9([1, 2, 9, 3, 4]) → true
arrayFront9([1, 2, 3, 4, 9]) → false
arrayFront9([1, 2, 3, 4, 5]) → false

*/

export function arrayFront9(inputArray: number[]): boolean {
  let result = false;
  for (let index = 0; index < 4; index++) {
    if (inputArray[index] == 9) {
      result = true;
    }
  }
  return result;
}
