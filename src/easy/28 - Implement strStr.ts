/**
 * Search for a needle (search string) in a haystack (search content), return the position in which the
 * needle occurs in the haystack, `-1` if not found.
 * 
 * @param haystack The string to search against
 * @param needle The string to look for in the haystack
 * @returns Position of the needle in the haystack, `-1` if not found.
 */
function strStr(haystack: string, needle: string): number {
    if (needle.length === 0) {
        return 0;
    }
    
    for (let i = 0; i < haystack.length; i++) {
        const snippet = haystack.substr(i, needle.length);
        
        if (snippet === needle) {
            return i;
        }
    }
    
    return -1;
};