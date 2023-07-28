/* 

Given a string, take the last char and return a new string with the last char added at the front and back, 
so "cat" yields "tcatt". The original string will be length 1 or more.


backAround("cat") → "tcatt"
backAround("Hello") → "oHelloo"
backAround("a") → "aaa"

*/

export function backAround(strParameter: string): string {
  let charArray: string[] = strParameter.split("");
  let lastChar = charArray[strParameter.length - 1];

  let newString = lastChar + strParameter + lastChar;

  return newString;
}
