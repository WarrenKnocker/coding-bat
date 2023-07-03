/*
Given a string and a non-negative int n, return a larger string that is n copies of the original string.


stringTimes("Hi", 2) → "HiHi"
stringTimes("Hi", 3) → "HiHiHi"
stringTimes("Hi", 1) → "Hi"
*/

export function stringTimes (input1: string, input2: number) : String{
    var result

    result = input1;

    if(input2 > 1){
    
        for (let index = 0; index <= input2; index++){  
        result = result.concat(input1)
        }
    }

    return result;
}