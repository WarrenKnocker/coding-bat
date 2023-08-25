export function stringTimes(stringInput: string, numInput: number): string {
  let result = stringInput;

  for (let index = 0; index < numInput - 1; index++) {
    result = result + stringInput;
  }
  return result;
}
