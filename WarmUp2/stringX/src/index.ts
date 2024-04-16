/*
Given a string, return a version where all the "x" have been removed. Except an "x" at the very start or end should not be removed.


stringX("xxHxix") → "xHix"
stringX("abxxxcd") → "abcd"
stringX("xabxxxcdx") → "xabcdx"
*/

export function stringX(strInput: string): string {
  let charArray: string[] = strInput.split("");
  let newString: string = "";

  if (charArray[0] != "x" && charArray[charArray.length - 1] != "x") {
    for (let index = 0; index < charArray.length; index++) {
      if (charArray[index] != "x") {
        newString = newString + charArray[index];
      }
    }
    return newString;
  } else {
    if (charArray[0] == "x" && charArray[charArray.length - 1] == "x")
      for (let index = 1; index <= charArray.length - 2; index++) {
        if (charArray[index] != "x") {
          newString = newString + charArray[index];
        }
      }
    return charArray[0] + newString + charArray[charArray.length - 1];
  }
}
