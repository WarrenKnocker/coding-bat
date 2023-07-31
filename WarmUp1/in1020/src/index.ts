/*
Given 2 int values, return true if either of them is in the range 10..20 inclusive.


in1020(12, 99) → true
in1020(21, 12) → true
in1020(8, 99) → false
*/

export function in1020(firstNum: number, secondNum: number): boolean {
  return (
    (firstNum >= 10 && firstNum <= 20) || (secondNum >= 10 && secondNum <= 20)
  );
}
