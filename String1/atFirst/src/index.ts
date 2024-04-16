export function atFirst(str: string): string {
  if (str.length < 2) {
    return str + "@";
  } else {
    return str.substring(0, 2);
  }
}
