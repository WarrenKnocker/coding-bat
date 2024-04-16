export function frontAgain(str: string): boolean {
  let front = str.substring(0, 2);

  return str.endsWith(front);
}
