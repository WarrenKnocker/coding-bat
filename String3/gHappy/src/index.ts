export function gHappy(str: string): boolean {
  let isHappy = false;
  let strArr = str.split("");

  for (let index = 0; index < str.length; index++) {
    if (
      strArr[index] == "g" &&
      (strArr[index - 1] == "g" || str[index + 1] == "g")
    ) {
      isHappy = true;
      continue;
    }
    if (
      strArr[index] == "g" &&
      (strArr[index - 1] != "g" || str[index + 1] != "g")
    ) {
      isHappy = false;
      continue;
    }
  }
  return isHappy;
}
