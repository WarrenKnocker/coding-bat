/*
Given a non-empty string and an int N, return the string made starting with char 0, 
and then every Nth char of the string. So if N is 3, use char 0, 3, 6, ... and so on. N is 1 or more.


everyNth("Miracle", 2) → "Mrce"
everyNth("abcdefg", 2) → "aceg"
everyNth(b"acdefg", 3) → "adg"
*/

export function everyNth(strInput: string, N: number): string {
  let strArray = strInput.split("");
  let strResult = strArray[0];

  for (let index = 1; index < strArray.length; index++) {
    if (index % N == 0) {
      strResult = strResult + strArray[index];
    }
  }
  return strResult;
}
