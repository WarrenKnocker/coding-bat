/*

Given a string, return a new string where "not " has been added to the front. However, 
if the string already begins with "not", return the string unchanged. Note: use .equals() to compare 2 strings.


notString("candy") → "not candy"
notString("x") → "not x"
notString("not bad") → "not bad"

*/

export function notString(strParameter: string): string {
  let strArray: string[] = strParameter.split(" ");

  if (strArray[0] !== "not") {
    return "not " + strParameter;
  } else {
    return strParameter;
  }
}
