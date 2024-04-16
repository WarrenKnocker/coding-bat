export function bunnyears2(input: number): number {
  if (input == 0) {
    return 0;
  }

  if (input % 2 == 0) {
    return 3 + bunnyears2(input - 1);
  } else {
    return 2 + bunnyears2(input - 1);
  }
}

/*

be(4)
be(3)
be(2)
be(1)
be(0)


*/
