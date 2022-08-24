/**
 * Determines if a string that contains parenthesis is in valid order.  Only valid block characters are
 * `(`, `)`, `[`, `]`, `{`, and `}`.  Anything else is ignored.
 * 
 * @param s The string to check.
 * @returns `true` if the order is valid, `false` otherwise.
 */
function isValid(s: string): boolean {
    const stack: string[] = [];
    const parenthesisMap = new Map([
        ['{', '}'],
        ['(', ')'],
        ['[', ']'],
    ]);

    for (let i = 0 ; i < s.length ; i += 1) {
        if (parenthesisMap.has(s[i])) {
            stack.push(parenthesisMap.get(s[i])!);
        } else if (s[i] !== stack.pop()) {
            return false;
        }
    }

    return stack.length === 0;
};