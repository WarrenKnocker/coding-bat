
/*
Given 2 int values, return true if one is negative and one is positive. 
Except if the parameter "negative" is true, then return true only if both are negative.


posNeg(1, -1, false) → true
posNeg(-1, 1, false) → true
posNeg(-4, -5, true) → true

*/

export function posNeg(firstParameter: number, secondParameter: number, negParamter: Boolean): boolean { 

    switch (negParamter) {

        case false: {
        
            if ((firstParameter > 0 && secondParameter < 0)
                || (firstParameter < 0 && secondParameter > 0)) {
                return true;
            }
            
            else {
                return false;
            }
        }
        
        
        case true: {
            
            if ((firstParameter < 0) && (secondParameter < 0)) {
                return true;
            }

            else {
                return false;
            }
        }
            
        default: 
            return false

    }
}









/*
export function posNeg(firstParameter: number, secondParameter: number, negParamter: Boolean): Boolean {

    if ((firstParameter > 0 && secondParameter < 0 && negParamter == false)
        || (firstParameter < 0 && secondParameter > 0 && negParamter == false)) {
        return true;
    }
    
    else if (firstParameter < 0 && secondParameter < 0 && negParamter == true) {
        return true;
    }

    else { 
        return false;
    }



}
*/