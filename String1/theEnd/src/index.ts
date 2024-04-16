export function theEnd(str: string, bool: boolean): string {
  let end = str.substring(str.length - 1);
  let front = str[0];

  if (bool == true) {
    return front;
  } else {
    return end;
  }
}
