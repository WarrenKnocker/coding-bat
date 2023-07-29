export function sumDouble(input1: number, input2: number): number {
  var result;

  if (input1 == input2) {
    result = (input1 + input2) * 2;
  } else {
    result = input1 + input2;
  }

  return result;
}
