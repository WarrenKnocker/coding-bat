export function notReplace(str: string): string {
  function isLetter(char: string): boolean {
    return /^[a-zA-Z]$/.test(char);
  }

  let result = "";

  for (let index = 0; index < str.length; index++) {
    if (str.substring(index, index + 2) == "is") {
      if (!isLetter(str[index - 1]) && !isLetter(str[index + 2])) {
        result += "is not";
        index++;
      } else {
        result += "is";
        index++;
      }
    } else {
      result += str[index];
    }
  }

  return result;
}
