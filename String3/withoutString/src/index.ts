export function withoutString(base: string, remove: string): string {
  let strArr = base.split(" ");
  let strArr2 = [];
  let remainder = "";
  let result = "";

  // check for string in string. Move to new array
  for (let item of strArr) {
    strArr2.push(item.replace(remove, ""));
  }

  // convert arr to string
  for (let item of strArr2) {
    remainder += item + " ";
  }

  // check for remaing letters
  let charArr = remainder.split("");
  for (let index = 0; index < charArr.length; index++) {
    if (charArr[index] == remove) {
      result += "";
      continue;
    }

    result += charArr[index];
  }

  return result.trim();
}
