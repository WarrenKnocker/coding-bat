/*
Given an int n, return the absolute difference between n and 21, except return double the absolute difference if n is over 21.


diff21(19) → 2
diff21(10) → 11
diff21(21) → 0
*/

//public int diff21(int n)

export function diff21(intParameter: number): number {
  var result;

  if (intParameter < 21) {
    result = 21 - intParameter;
    Math.abs(result);
  } else {
    result = (21 - intParameter) * 2;
    Math.abs(result);
  }

  return result;
}
