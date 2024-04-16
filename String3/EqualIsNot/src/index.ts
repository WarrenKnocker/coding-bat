export function equalIsNot(str: string): boolean {
  let strArr = str.split(" ");
  let isCount = 0;
  let notCount = 0;

  for (let item of strArr) {
    //is check
    for (let index = 0; index < item.length; index++) {
      if (item[index] == "i" && item[index + 1] == "s") {
        isCount++;
      }
    }
    //not check
    for (let index = 0; index < item.length; index++) {
      if (
        item[index] == "n" &&
        item[index + 1] == "o" &&
        item[index + 2] == "t"
      ) {
        notCount++;
      }
    }
  }

  return isCount == notCount;
}
