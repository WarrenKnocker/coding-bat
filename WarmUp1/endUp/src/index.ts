/*
Given a string, return a new string where the last 3 chars are now in upper case. If the string has less than 3 chars, uppercase whatever is there. Note that str.toUpperCase() returns the uppercase version of a string.


endUp("Hello") → "HeLLO"
endUp("hi there") → "hi thERE"
endUp("hi") → "HI"
*/

export function endUp(strInput: string): string {
  if (strInput.length >= 3) {
    return (
      strInput.substring(0, strInput.length - 3) +
      strInput.substring(strInput.length - 3, strInput.length).toUpperCase()
    );
  } else return strInput.toUpperCase();
}
