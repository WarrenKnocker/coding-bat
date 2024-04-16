export function withoutX2(str: string): string {
  let charArr = str.split("");
  let result = "";

  for (let index = 0; index < charArr.length; index++) {
    if (charArr[index] == "x") {
      continue;
    } else {
      result += charArr[index];
    }
  }

  return result;
}
