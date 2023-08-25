/*

Count the number of "xx" in the given string. We'll say that overlapping is allowed, so "xxx" contains 2 "xx".


countXX("abcxx") → 1
countXX("xxx") → 2
countXX("xxxx") → 3
*/

export function countXX(stringInput: string): number {
  let charArray: string[] = stringInput.split("");
  let counter = 0;
  for (let index = 0; index <= stringInput.length; index++) {
    if (charArray[index] == "x" && charArray[index + 1] == "x") {
      counter++;
    }
  }

  return counter;
}
