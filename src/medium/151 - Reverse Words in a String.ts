/**
 * Takes a string, reverses its order, and returns the string back, concatenated by single spaces.
 * 
 * @param s String containing sentence in which to reverse
 * @returns The provided string in reverse order, trimmed of excess whitespace
 */
function reverseWords(s: string): string {
    // The wonders of Array functional programming.
    return s
        .replace(/[^A-Za-z0-9 ]/g, '')
        .replace(/\s+/g, ' ')
        .trim()
        .split(' ')
        .reverse()
        .join(' ');
};