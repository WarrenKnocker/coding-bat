export function sumDouble(firstNum: number, secondNum: number): number {
  var result;

  if (firstNum == secondNum) {
    result = (firstNum + secondNum) * 2;
  } else {
    result = firstNum + secondNum;
  }

  return result;
}
