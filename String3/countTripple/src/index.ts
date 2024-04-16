export function countTripple(str: string): number {
  let strArr = str.split("");
  let counter = 0;

  for (let index = 0; index < strArr.length; index++) {
    let compStr = strArr[index];
    if (strArr[index + 1] == compStr && strArr[index + 2] == compStr) {
      counter++;
    }
  }

  return counter;
}
