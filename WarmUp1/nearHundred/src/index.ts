//public boolean nearHundred(int n) {
/*
Given an int n, return true if it is within 10 of 100 or 200. Note: Math.abs(num) computes the absolute value of a number.


nearHundred(93) → true
nearHundred(90) → true
nearHundred(89) → false

*/

export function nearHundred(unserInput: number): boolean {
  unserInput = Math.abs(unserInput);

  if (
    (unserInput >= 90 && unserInput <= 110) ||
    (unserInput >= 190 && unserInput <= 220)
  ) {
    return true;
  } else return false;
}
