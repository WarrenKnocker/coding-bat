export function makes10(firstValue : number, secondValue : number) : Boolean {

    if ((firstValue == 10 || secondValue == 10) || (firstValue + secondValue == 10)) {
        return true;
    }
    else {
        return false;
    }
}
    