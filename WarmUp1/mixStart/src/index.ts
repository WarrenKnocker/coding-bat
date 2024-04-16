/*

Return true if the given string begins with "mix", except the 'm' can be anything, so "pix", "9ix" .. all count.


mixStart("mix snacks") → true
mixStart("pix snacks") → true
mixStart("piz snacks") → false
*/

export function mixStart(strParamter: string): boolean {
  return strParamter.substring(1, 3) == "ix";
}
