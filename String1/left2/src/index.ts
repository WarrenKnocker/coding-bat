export function left2(str1: string): string {
  let first2 = str1.substring(0, 2);
  let sendcond2 = str1.substring(2);

  return sendcond2 + first2;
}
