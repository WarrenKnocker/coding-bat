export function withoutX(str: string): string {
  if (str.startsWith("x") && str.endsWith("x")) {
    return str.substring(1, str.length - 1);
  }
  if (str.startsWith("x") && !str.endsWith("x")) {
    return str.substring(1);
  }
  if (!str.startsWith("x") && str.endsWith("x")) {
    return str.substring(0, str.length - 1);
  }
  return "";
}
