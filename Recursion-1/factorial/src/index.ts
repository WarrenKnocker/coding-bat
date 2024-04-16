export function factorial(n: number): number {
  if (n == 1) {
    return n;
  }

  return n * factorial(n - 1);
}

// 6 = 6 * (6-1) * (6-2) * (6-3) * (6-4) * (6-5)

/*

f(6) = 6 * f(5) =  120
f(5) = 5 * f(4) = 24
f(4) = 4 * f(3) = 6
f(3) = 3 * f(2) =2
f(2) = 2 * f(1) =1


*/
