export function extraEnd(str1: string): string {
  let answer = str1.substring(str1.length - 2, str1.length);
  return answer + answer + answer;
}
