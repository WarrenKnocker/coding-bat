/*
Given a string, return true if the first instance of "x" in the string is immediately followed by another "x".


doubleX("axxbb") → true
doubleX("axaxax") → false
doubleX("xxxxx") → true
*/

export function doubleX(stringInput: string): boolean {
  let charArray: string[] = stringInput.split("");
  let result = false;
  for (let index = 0; index <= stringInput.length; index++) {
    if (charArray[index] == "x" && charArray[index + 1] == "x") {
      result = true;
      break;
    } else result = false;
  }
  return result;
}
