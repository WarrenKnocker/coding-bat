export function extraFront(str: string): string {
  if (str.length == 1) {
    return str + str + str;
  } else {
    let first2 = str.substring(0, 2);
    return first2 + first2 + first2;
  }
}
