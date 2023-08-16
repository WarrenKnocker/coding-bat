/* 

Given a string, take the last char and return a new string with the last char added at the front and back, 
so "cat" yields "tcatt". The original string will be length 1 or more.


backAround("cat") → "tcatt"
backAround("Hello") → "oHelloo"
backAround("a") → "aaa"

*/

export function backAround(testString: string): string {
  if (testString == "") {
    return testString;
  } else {
    let charArray: string[] = testString.split("");
    let lastChar = charArray[testString.length - 1];

    return lastChar + testString + lastChar;
  }
}
