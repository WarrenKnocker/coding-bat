/*
Given a string, return a new string where the first and last chars have been exchanged.


frontBack("code") → "eodc"
frontBack("a") → "a"
frontBack("ab") → "ba"
*/

export function frontBack(strParameter: string): string {
  let charArray: string[] = strParameter.split("");

  if (charArray.length < 1) {
    return strParameter;
  } else {
    let charTemp = charArray[0];
    charArray[0] = charArray[charArray.length - 1];
    charArray[charArray.length - 1] = charTemp;

    strParameter = charArray.join("");
    return strParameter;
  }
}
