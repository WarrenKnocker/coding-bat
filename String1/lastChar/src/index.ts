export function lastChars(a: string, b: string) {
  let frirstLast = "";
  let secondLast = "";

  if (a.length == 0) {
    frirstLast = "@";
  } else {
    frirstLast = a[0];
  }
  if (b.length == 0) {
    secondLast = "@";
  } else {
    secondLast = b[b.length - 1];
  }

  return frirstLast + secondLast;
}
