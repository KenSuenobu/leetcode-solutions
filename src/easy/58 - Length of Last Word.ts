/**
 * Good example of reverse iteration of a string: start from end, count until space occurs.  If no space is
 * encountered, return the length of the string minus whitespace.
 * 
 * @param s String containing a word or sentence to check
 * @returns Length of the last word in the string
 */
function lengthOfLastWord(s: string): number {
    const words = s.trim();
    
    for (let i = words.length - 1, len = 0; i > 0; i--, len++) {
        if (words[i] == ' ') {
            return len;
        }
    }
    
    return words.length;
};