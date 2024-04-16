export function sumDigits(str: string): number {
  let strArr = str.split("");
  let result = 0;

  for (let item of strArr) {
    if (!isNaN(Number(item))) {
      result += Number(item);
    }
  }
  return result;
}
