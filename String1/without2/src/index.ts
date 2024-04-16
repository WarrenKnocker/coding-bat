export function without2(str: string): string {
  let firstTWo = str.substring(0, 2);

  if (str.endsWith(firstTWo)) {
    return str.substring(2);
  }
  if (str.endsWith(firstTWo) && str.startsWith(firstTWo)) {
    return "'";
  } else {
    return str;
  }
}
