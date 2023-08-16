/*

Given a string, we'll say that the front is the first 3 chars of the string. If the string length is less than 3, the front is whatever is there. 
Return a new string which is 3 copies of the front.


front3("Java") → "JavJavJav"
front3("Chocolate") → "ChoChoCho"
front3("abc") → "abcabcabc"


*/

export function front3(strParameter: string): string {
  let charArray: string[] = strParameter.split("");

  let slicedStr = strParameter.slice(0, 3);
  let strResult: string = "";

  for (let index = 0; index < 3; index++) {
    strResult = strResult + slicedStr;
  }

  return strResult;
}
