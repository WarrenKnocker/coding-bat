/* 
Return true if the given non-negative number is a multiple of 3 or a multiple of 5. Use the % "mod" operator -- see Introduction to Mod


or35(3) → true
or35(10) → true
or35(8) → false

*/

export function or35(testNumber: number): boolean {
  testNumber = Math.abs(testNumber);

  return testNumber % 3 == 0 || testNumber % 5 == 0;
}
