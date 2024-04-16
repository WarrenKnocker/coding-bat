export function nTwice(str: string, n: number) {
  let first = str.substring(0, n);
  let last = str.substring(str.length - n);
  return first + last;
}
