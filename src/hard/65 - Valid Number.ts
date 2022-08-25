/**
 * String comparison function that determines if a number is valid.  Accepts signed numbers with
 * exponent notation, along with signed exponent values.
 * 
 * @param s String to determine validity
 * @returns `true` if the number is a valid number, `false` otherwise.
 */
function isNumber(s: string): boolean {
    let hasDecimal = false;
    let hasSign = false;
    let hasExponent = false;
    let hasDigits = false;
    let hasExponentDigits = false;
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] == '-' || s[i] == '+') {
            if (hasExponent) {
                if (hasExponentDigits) {
                    return false;
                }
                
                if (!hasSign) {
                    hasSign = true;
                }
            } else if (hasSign || hasDigits || hasDecimal) {
                return false;
            }
            
            hasSign = true;
        } else if (s[i] == '.') {
            if (hasDecimal || hasExponent) {
                return false;
            }
            
            hasDecimal = true;
        } else if (s[i] == 'E' || s[i] == 'e') {
            if (hasExponent || !hasDigits) {
                return false;
            }
            
            hasExponent = true;
        } else if (s.charCodeAt(i) - 48 >= 0 && s.charCodeAt(i) - 48 <= 9) {
            if (hasExponent) {
                hasExponentDigits = true;
            } else {
                hasDigits = true;
            }
        } else {
            return false;
        }
    }
    
    if (hasDigits) {
        if (hasExponent) {
            return hasExponentDigits;
        }
        
        return hasDigits;
    }
    
    return false;
};