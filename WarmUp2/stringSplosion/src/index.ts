/*

Given a non-empty string like "Code" return a string like "CCoCodCode".


stringSplosion("Code") → "CCoCodCode"
stringSplosion("abc") → "aababc"
stringSplosion("ab") → "aab"
*/

export function stringSplosion(stringInput: string): string {
  let result = "";
  for (let index = 0; index < stringInput.length; index++) {
    result = result + stringInput.substring(0, index + 1);
  }
  return result;
}
