/* 


Given a string, take the first 2 chars and return the string with the 2 chars added at both the front and back, so "kitten" yields"kikittenki". 
If the string length is less than 2, use whatever chars are there.


front22("kitten") → "kikittenki"
front22("Ha") → "HaHaHa"
front22("abc") → "ababcab"

*/

export function front22(strParameter: string): string {
  const TempChar = strParameter.slice(0, 2);

  const result = TempChar + strParameter + TempChar;

  return result;
}
