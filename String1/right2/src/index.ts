export function right2(str: string): string {
  let end = str.substring(str.length - 2);
  let front = str.substring(0, str.length - 2);

  return end + front;
}
