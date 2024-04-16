export function startWord(str1: string, str2: string): string {
  if (str2.length == 1) {
    return str1[0];
  }

  if (str1.startsWith(str2)) {
    return str2;
  }

  let compStr = str1.substring(0, str2.length);

  if (compStr.substring(1) == str2.substring(1)) {
    return compStr;
  }

  return "";
}
