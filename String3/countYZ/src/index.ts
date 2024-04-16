export function countYZ(str: string): number {
  let strArr = str.split(" ");
  let counter = 0;

  for (let item of strArr) {
    if (item.endsWith("y") || item.endsWith("z")) {
      counter++;
    }
  }
  return counter;
}
