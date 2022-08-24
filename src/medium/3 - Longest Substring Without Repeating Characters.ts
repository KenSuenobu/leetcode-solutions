/**
 * Takes a string and searches for the longest substring within its bounds that does not contain repeating
 * characters.  Returns the length of the longest substring found.  Speed is `O(n)`
 * 
 * @param s String to search for non-repeating characters
 * @returns Length of the substring that was found
 */
function lengthOfLongestSubstring(s: string): number {
    var mySet = new Set();
    var max = 0;
    var i = 0;
    var j = 0;

    while (i < s.length) {
        if (!mySet.has(s[i])) {
            mySet.add(s[i]);
            i++;
        } else {
            max = Math.max(max,mySet.size);
            mySet.delete(s[j]);
            j++;
        }
    }

    return Math.max(max,mySet.size);
};
