export function hasBad(str: string): boolean {
  return str.substring(0, 3) == "bad" || str.substring(1, 4) == "bad";
}
