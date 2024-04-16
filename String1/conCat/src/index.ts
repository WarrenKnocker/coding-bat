export function conCat(a: string, b: string): string {
  let firstStr = "";

  if (a[a.length - 1] == b[0]) {
    firstStr = a.substring(0, a.length - 1);
  } else {
    firstStr = a;
  }

  return firstStr + b;
}
