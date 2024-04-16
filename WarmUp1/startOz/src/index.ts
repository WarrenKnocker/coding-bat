/*


Given a string, return a string made of the first 2 chars (if present), 
however include first char only if it is 'o' and include the second only if it is 'z', so "ozymandias" yields "oz".


startOz("ozymandias") → "oz"
startOz("bzoo") → "z"
startOz("oxx") → "o"
*/

export function startOz(strParamter: string): string {
  let strArray: string[] = strParamter.split("");

  if (strArray[0] == "o" && strArray[1] == "z") {
    return strArray[0].concat(strArray[1]);
  } else if (strArray[0] == "o") {
    return strArray[0];
  } else if (strArray[1] == "z") {
    return strArray[1];
  } else {
    return "'o' || 'z' not present";
  }
}
