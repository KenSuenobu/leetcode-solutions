/**
 * Takes a number and convers it to its reverse, signed or unsigned.  Any number exceeding 32 bit bounds will
 * return a 0.  Speed is `O(n)`
 * 
 * @param x Number to reverse
 * @returns `x` in reverse
 */
function reverse(x: number): number {
    const limit = Math.pow(2, 31) - 1;
 
    if (Math.abs(x) >= limit) {
        return 0;
    }
 
    const isNegative = x < 0;
    const xString = `${Math.abs(x)}`;
    let reversedVal = '';
 
    for(let pos = xString.length - 1; pos > -1; pos--) {
        reversedVal += xString[pos];
    }
 
    const reversedReturn = parseInt(`${isNegative ? '-' : ''}${reversedVal}`);
 
    if (Math.abs(reversedReturn) >= limit) {
        return 0;
    }
 
    return reversedReturn;
 };
 