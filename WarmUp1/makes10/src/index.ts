export function makes10(firstValue: number, secondValue: number): Boolean {
  return (
    firstValue == 10 || secondValue == 10 || firstValue + secondValue == 10
  );
}
