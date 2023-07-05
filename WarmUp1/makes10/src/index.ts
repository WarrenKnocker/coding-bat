/*
Given 2 ints, a and b, return true if one if them is 10 or if their sum is 10.


makes10(9, 10) → true
makes10(9, 9) → false
makes10(1, 9) → true

*/

export function makes10(input1: number, input2: number): boolean { 

    if ((input1 == 10 || input2 == 10) || (input1 + input2 == 10)) {
        return true
    }
    else
        return false;

}

