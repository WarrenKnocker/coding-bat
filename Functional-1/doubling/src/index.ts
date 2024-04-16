/*
Given a list of integers, return a list where each integer is multiplied by 2.


doubling([1, 2, 3]) → [2, 4, 6]
doubling([6, 8, 6, 8, -1]) → [12, 16, 12, 16, -2]
doubling([]) → []
*/

export function doubling(numArray: number[]): number[] {
  const newArray = numArray.map((element) => element * 2);
  return newArray;
}
