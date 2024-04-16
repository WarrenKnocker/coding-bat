export function maxBlock(str: string): number {
  let longestBlock = 0;

  for (let index = 0; index < str.length; index++) {
    let compVar = str[index];
    let tempValue = "" + compVar;

    for (let sbIndex = index + 1; sbIndex < str.length; sbIndex++) {
      if (str[sbIndex] == compVar) {
        tempValue += str[sbIndex];
      } else {
        if (tempValue.length > longestBlock) {
          longestBlock = tempValue.length;
        }
        break;
      }
    }
  }
  return longestBlock;
}
