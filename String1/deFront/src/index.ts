export function deFront(str: string): string {
  let subStr = str.substring(2);

  if (str[0] == "a") {
    return "a" + subStr;
  }
  if (str[0] == "b") {
    return "b" + subStr;
  }

  return subStr;
}
