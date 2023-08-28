/*


Given an array of ints, we'll say that a triple is a value appearing 3 times in a row in the array. Return true if the array does not contain any triples.


noTriples([1, 1, 2, 2, 1]) → true
noTriples([1, 1, 2, 2, 2, 1]) → false
noTriples([1, 1, 1, 2, 2, 2, 1]) → false
*/

export function noTriples(numArray: number[]): boolean {
  let result = true;
  for (let index = 0; index < numArray.length; index++) {
    let compVariable = numArray[index];
    if (
      numArray[index + 1] == compVariable &&
      numArray[index + 2] == compVariable
    ) {
      result = false;
      break;
    }
  }

  return result;
}
