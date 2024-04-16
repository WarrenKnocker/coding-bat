export function lastTwo(str: string): string {
  let last = str[str.length - 1];
  let secLast = str[str.length - 2];

  let body = str.substring(0, str.length - 2);

  return body + last + secLast;
}
