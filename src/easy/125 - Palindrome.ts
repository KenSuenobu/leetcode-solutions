/**
 * Checks to see if a string written in plain text is a palindrome.  Array comparison
 * code.  Speed is `O(1/2 n)`
 * 
 * @param s String to check
 * @returns `true` if the string is a palindrome, `false` otherwise.
 */
function isPalindrome(s: string): boolean {
    if (!s) {
        return false;
    }
    
    const trimmedS = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    
    if (trimmedS.length === 0) {
        return true;
    }
    
    for (let i = 0; i < Math.ceil(trimmedS.length / 2); i++) {
        if (trimmedS[i] !== trimmedS[trimmedS.length - i - 1]) {
            return false;
        }
    }
    
    return true;
};