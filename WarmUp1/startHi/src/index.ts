/*
Given a string, return true if the string starts with "hi" and false otherwise.


startHi("hi there") → true
startHi("hi") → true
startHi("hello hi") → false

*/

export function startHi(strParameter: string): boolean {
  return strParameter.startsWith("hi");
}
