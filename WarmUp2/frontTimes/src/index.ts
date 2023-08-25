/*
Given a string and a non-negative int n, we'll say that the front of the string is the first 3 chars, 
or whatever is there if the string is less than length 3. Return n copies of the front;


frontTimes("Chocolate", 2) → "ChoCho"
frontTimes("Chocolate", 3) → "ChoChoCho"
frontTimes("Abc", 3) → "AbcAbcAbc"
*/

export function frontTimes(stringInput: string, numInput: number): string {
  let firstThreeChar = stringInput.substring(0, 3);
  let result = "";

  for (let index = 0; index <= numInput - 1; index++) {
    result = result + firstThreeChar;
  }
  return result;
}
