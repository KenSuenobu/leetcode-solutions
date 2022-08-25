/**
 * Raises X to the power of N.
 * 
 * @param x The number to calculate
 * @param n The power to raise the number to calculate
 * @returns `x` raised to the power of `n`
 */
function myPow(x: number, n: number): number {
    let returnValue = x;
    
    if (n == 0) {
        return 1;
    }
    
    if (n > 0) {
        for (let pow = 0; pow < n - 1; pow++) {
            returnValue *= x;
        }
    }
    
    if (n < 0) {
        let divisor = x;
        
        for (let pow = 0; pow < Math.abs(n); pow++) {
            divisor *= x;
        }
        
        returnValue /= divisor;
    }
    
    return returnValue;

    // The fastest technical solution is:
    // `return x ** n`
};