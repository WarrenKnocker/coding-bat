export function minCat(str1: string, str2: string): string {
  let longest;

  if (str1.length > str2.length) {
    let newSt1 = str1.substring(str1.length - str2.length);
    return newSt1 + str2;
  }
  if (str2.length > str1.length) {
    let newSt2 = str2.substring(str2.length - str1.length);
    return str1 + newSt2;
  }

  return "";
}
