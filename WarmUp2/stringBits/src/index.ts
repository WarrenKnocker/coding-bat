/*
Given a string, return a new string made of every other char starting with the first, so "Hello" yields "Hlo".


stringBits("Hello") → "Hlo"
stringBits("Hi") → "H"
stringBits("Heeololeo") → "Hello"
*/

export function stringBits(stringInput: string): string {
  let charArray: string[] = stringInput.split("");
  let result: string = "";

  for (let index = 0; index < stringInput.length; index += 2) {
    result = result + charArray[index];
  }
  return result;
}
