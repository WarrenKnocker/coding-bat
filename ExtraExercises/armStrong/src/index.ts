/*
An Armstrong number is a number that is the sum of its own digits each raised to the power of the number of digits.

For example:

9 is an Armstrong number, because 9 = 9^1 = 9
10 is not an Armstrong number, because 10 != 1^2 + 0^2 = 1
153 is an Armstrong number, because: 153 = 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
154 is not an Armstrong number, because: 154 != 1^3 + 5^3 + 4^3 = 1 + 125 + 64 = 190
Write some code to determine whether a number is an Armstrong number.
*/

export function armStrong(numInput: number): boolean {
  let stringDigit = String(numInput);
  let charArray: string[] = stringDigit.split("");
  let numArray: number[] = [];

  for (let index = 0; index < charArray.length; index++) {
    let numberItem = Number(charArray[index]);
    numArray.push(numberItem);
  }

  let sumResult = 0;
  for (let index = 0; index < numArray.length; index++) {
    let baseNumber = numArray[index];
    let powerResult = numArray[index];

    //This will power the number at [index]
    for (let indexPower = 0; indexPower < numArray.length - 1; indexPower++) {
      powerResult = powerResult * baseNumber;
    }

    sumResult = sumResult + powerResult;
  }

  return sumResult == numInput;
}
