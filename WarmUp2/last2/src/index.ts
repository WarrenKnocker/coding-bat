/*
Given a string, return the count of the number of times that a substring length 2 appears in the string and also as the last 2 chars of the string, so "hixxxhi" yields 1 (we won't count the end substring).


last2("hixxhi") → 1
last2("xaxxaxaxx") → 1
last2("axxxaaxx") → 2
*/

export function last2(stringInput: string): number {
  let compStr = stringInput.substring(
    stringInput.length - 2,
    stringInput.length
  );
  let counter = 0;
  for (let index = 0; index < stringInput.length - 2; index++) {
    if (compStr == stringInput.substring(index, index + 2)) {
      counter++;
    }
  }
  return counter;
}
