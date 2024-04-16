/*
Return true if the given string contains between 1 and 3 'e' chars
*/

export function stringE(strInput: string): boolean {
  const strArray: string[] = strInput.split("");
  let counter = 0;
  for (let index = 0; index < strArray.length; index++) {
    if (strArray[index] == "e") {
      counter++;
    }
  }
  return counter >= 1 && counter < 4;
}
