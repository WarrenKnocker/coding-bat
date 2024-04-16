export function seeColor(str: string): string {
  if (str.startsWith("blue")) {
    return "blue";
  }
  if (str.startsWith("red")) {
    return "red";
  }

  return "";
}
