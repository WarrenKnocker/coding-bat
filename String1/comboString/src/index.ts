export function comboString(a: string, b: string) {
  let longestStr = undefined;
  let shortest = undefined;

  if (a.length > b.length) {
    longestStr = a;
    shortest = b;
  } else {
    longestStr = b;
    shortest = a;
  }

  return shortest + longestStr + shortest;
}
