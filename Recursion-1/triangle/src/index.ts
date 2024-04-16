export function triangle(input: number): number {
  if (input == 0) {
    return 0;
  }

  return input + triangle(input - 1);
}

/*

t(0) = 0
t(1)= 1
t2(2) = 3
t3(3) = 6
t(4) = 10  




*/
