/*
Given a string, return true if the string starts with "hi" and false otherwise.


startHi("hi there") → true
startHi("hi") → true
startHi("hello hi") → false

*/

export function startHi(strParameter: string): boolean {
  let firstTwoChar = strParameter.slice(0, 2);

  if (firstTwoChar == "hi") {
    return true;
  } else {
    return false;
  }
}
