/**
 * Brute-force calculation for square root.  Times out in Leetcode's submission, but should be accurate.
 * Follows the brief in that no numerical Math functions can be used, and only the whole number may be
 * returned, truncating the decimal value.  Lots of people in the discussion here didn't read the brief...
 * 
 * @param x Number to calculate square root of
 * @returns Square root of the number given.
 */
function mySqrt(x: number): number {
    var ax, ax1 = x / 2;
        
    do {
        ax = ax1;
        ax1 = (ax + (x / ax)) / 2;
    } while (ax !== ax1);
    
    const retVal = `${ax}`;
    
    if (retVal.indexOf('.') !== -1) {
        return parseInt(retVal.substring(0, retVal.indexOf('.')));
    }
    
    return ax;
};