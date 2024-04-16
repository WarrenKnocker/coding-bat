export function twoChar(str: string, index: number): string {
  if (str.length < index + 2) {
    return str.substring(0, 2);
  }

  return str.substring(index, index + 2);
}
