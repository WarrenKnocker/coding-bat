export function fibonacci(n: number): number {
  if (n == 0 || n < 0) {
    return 0;
  }
  if (n == 1) {
    return 1;
  }

  return fibonacci(n - 1) + fibonacci(n - 2);
}

/*

f(0) = (0) 
f(1) = (1) 
f(2)= (1) + (0) = 1
f(3) = (f(2) = 1) + (f(1) = 1) = 2
f(4) = (f(3)=2) + (f(2)=1) =3
f(5) = (f(4)=3) + (f(3) = 2) = 5

*/
