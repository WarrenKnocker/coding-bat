/*
Given a string, return a string made of the chars at indexes 0,1, 4,5, 8,9 ... so "kittens" yields "kien".


altPairs("kitten") → "kien"
altPairs("Chocolate") → "Chole"
altPairs("CodingHorror") → "Congrr"
*/

export function altPairs(strInput: string): string {
  let charArray: string[] = strInput.split("");
  let charArrayIndex: number[] = [0, 1, 4, 5, 8, 9];
  let newString = "";

  for (let index = 0; index < charArrayIndex.length; index++) {
    if (charArrayIndex[index] >= charArray.length) {
      break;
    } else {
      newString = newString + charArray[charArrayIndex[index]];
    }
  }

  return newString;
}
