/*
Given two temperatures, return true if one is less than 0 and the other is greater than 100.


icyHot(120, -1) → true
icyHot(-1, 120) → true
icyHot(2, 120) → false
*/

export function icyHot(firstTemp: number, secondTemp: number): boolean {
  return (
    (firstTemp < 0 && secondTemp > 100) || (firstTemp > 100 && secondTemp < 0)
  );
}
