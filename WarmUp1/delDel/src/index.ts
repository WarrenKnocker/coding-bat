/*


Given a string, if the string "del" appears starting at index 1, return a string where that "del" has been deleted. Otherwise, return the string unchanged.


delDel("adelbc") → "abc"
delDel("adelHello") → "aHello"
delDel("adedbc") → "adedbc"
*/

export function delDel(strParamter: string): string {
  if (strParamter.substring(1, 4) == "del") {
    return strParamter.substring(0, 1) + strParamter.substring(4);
  } else {
    return strParamter;
  }
}
