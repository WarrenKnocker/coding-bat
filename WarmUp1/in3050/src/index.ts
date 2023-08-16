/* 
Given 2 int values, return true if they are both in the range 30..40 inclusive, or they are both in the range 40..50 inclusive.


in3050(30, 31) → true
in3050(30, 41) → false
in3050(40, 50) → true
*/

export function in3050(firstNum: number, secondNum: number): boolean {
  return (
    (firstNum >= 30 && firstNum <= 40 && secondNum >= 30 && secondNum <= 40) ||
    (firstNum >= 40 && firstNum <= 50 && secondNum >= 40 && secondNum <= 50)
  );
}
