/*
Given 2 strings, a and b, return the number of the positions where they contain the same length 2 substring. So "xxcaazz" and "xxbaaz" yields 3, since the "xx", "aa", and "az" substrings appear in the same place in both strings.


stringMatch("xxcaazz", "xxbaaz") → 3
stringMatch("abc", "abc") → 2
stringMatch("abc", "axc") → 0
*/

export function stringMatch(strInput1: string, strInput2: string): number {
  let strIndex;
  if (strInput1.length < strInput2.length) {
    strIndex = strInput1;
  } else {
    strIndex = strInput2;
  }

  let counter = 0;
  for (let index = 0; index < strIndex.length - 1; index++) {
    if (
      strInput1.substring(index, index + 1) ==
        strInput2.substring(index, index + 1) &&
      strInput1.substring(index + 1, index + 2) ==
        strInput2.substring(index + 1, index + 2)
    ) {
      counter++;
    }
  }
  return counter;
}
