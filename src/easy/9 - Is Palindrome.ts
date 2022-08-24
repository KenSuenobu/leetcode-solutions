/**
 * Determines if a number is a palindrome.  Only valid for positive numbers.
 * 
 * @param x Number to validate
 * @returns `true` if the number is a palindrome, `false` otherwise.
 */
function isPalindrome(x: number): boolean {
    if (x < 0) {
        return false;
    }
 
    const numberAsString = `${x}`;
    const xLength = numberAsString.length - 1;
 
    for(let pos = 0; pos < Math.round(xLength / 2); pos++) {
        if (numberAsString[pos] != numberAsString[xLength - pos]) {
            return false;
        }
    }
 
    return true;
};
