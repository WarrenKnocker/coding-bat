export function sameEnds(str: string): string {
  let longestEnd = "";
  let compStr = str[0];

  if (str.length < 2) {
    return str;
  }

  if (str.length < 3) {
    if (str[0] == str[1]) {
      return str[0];
    }
  }

  if (str.length < 4) {
    if (str[0] == str[2]) {
      return str[0];
    }
  }

  for (let index = 1; index < str.length; index++) {
    compStr += str[index];
    if (str.endsWith(compStr)) {
      longestEnd = compStr;
      continue;
    }
    if (!str.endsWith(compStr)) {
      break;
    }
  }

  return longestEnd;
}
