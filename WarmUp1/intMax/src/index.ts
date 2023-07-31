/*
Given three int values, a b c, return the largest.

intMax(1, 2, 3) → 3
intMax(1, 3, 2) → 3
intMax(3, 2, 1) → 3
*/

export function intMax(numA: number, numB: number, numC: number): number {
  if (numA > numB && numA > numC) {
    return numA;
  } else if (numB > numA && numB > numC) {
    return numB;
  } else {
    return numC;
  }
}
