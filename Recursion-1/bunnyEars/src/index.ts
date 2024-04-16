export function bunnyEars(num: number): number {
  if (num == 1) {
    return 2;
  }
  return 2 + bunnyEars(num - 1);
}
