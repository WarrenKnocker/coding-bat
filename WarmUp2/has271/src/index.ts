/*
Given an array of ints, return true if it contains a 2, 7, 1 pattern: 
a value, followed by the value plus 5, 
followed by the value minus 1. Additionally the 271 counts even if the "1" differs by 2 or less from the correct value.


has271([1, 2, 7, 1]) → true
has271([1, 2, 8, 1]) → false
has271([2, 7, 1]) → true
*/

export function has271(numArray: number[]): boolean {
  let result = false;
  for (let index = 0; index < numArray.length; index++) {
    let compVariable = numArray[index];
    if (
      numArray[index + 1] == compVariable + 5 &&
      numArray[index + 2] == compVariable - 1
    ) {
      result = true;
      break;
    }
  }

  return result;
}
