/**
 * Converts a string to an integer (atoi).  This custom version does not use `parseInt`; it takes the value of
 * the US-ASCII character found, and converts it into its numeric counterpart, subtracting ASCII `0` from the
 * value.  Anything exceeding those bounds is not a number.  32 bit bounds rules apply.
 * 
 * @param s String to convert to integer.
 * @returns Integer form of the string, if valid.
 */
function myAtoi(s: string): number {
    const asciiZeroValue = 48;
    let trimmedS = s.trim();
    let isNegative = false;
    let numericResult = 0;
 
    if (trimmedS[0] == '-' || trimmedS[0] == '+') {
        isNegative = trimmedS[0] == '-';
        trimmedS = trimmedS.substring(1);
    }
 
    if (trimmedS.charCodeAt(0) - asciiZeroValue < 0 || trimmedS.charCodeAt(0) - asciiZeroValue > 9) {
        return 0;
    }
 
    trimmedS = trimmedS.split(/[^0-9]/)[0].trim();
 
    let multiplier = 1;
 
    while(trimmedS.charCodeAt(0) == asciiZeroValue) {
        trimmedS = trimmedS.substring(1);
    }
 
    for(let i = trimmedS.length - 1; i > -1; i--, multiplier *= 10) {
        numericResult += (trimmedS.charCodeAt(i) - asciiZeroValue) * multiplier;
    }
 
    return (numericResult >= Math.pow(2, 31)) ? isNegative ? (Math.pow(2, 31)) * -1 : Math.pow(2, 31) - 1 : numericResult * (isNegative ? -1 : 1);
 }
  