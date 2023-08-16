//public boolean nearHundred(int n) {
/*
Given an int n, return true if it is within 10 of 100 or 200. Note: Math.abs(num) computes the absolute value of a number.


nearHundred(93) → true
nearHundred(90) → true
nearHundred(89) → false

*/

export function nearHundred(testedInput: number): boolean {
  testedInput = Math.abs(testedInput);

  return (
    (testedInput >= 90 && testedInput <= 110) ||
    (testedInput >= 190 && testedInput <= 220)
  );
}
