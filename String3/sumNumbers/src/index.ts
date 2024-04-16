export function sumNumbers(str: string): number {
  let strNumArr = str.match(/\d+/g) || [];
  console.log(strNumArr);
  let result = 0;
  for (let item of strNumArr) {
    result += Number(item);
  }
  return result;
}
