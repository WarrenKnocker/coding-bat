/*
Given a string, return a new string where the first and last chars have been exchanged.


frontBack("code") → "eodc"
frontBack("a") → "a"
frontBack("ab") → "ba"
*/

export function frontBack(testedString: string): string {
  let charArray: string[] = testedString.split("");

  if (charArray.length < 1) {
    return testedString;
  } else {
    let charTemp = charArray[0];
    charArray[0] = charArray[charArray.length - 1];
    charArray[charArray.length - 1] = charTemp;

    testedString = charArray.join("");
    return testedString;
  }
}
