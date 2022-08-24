function thousands(val: string): string {
    switch(val) {
        case '1': return 'M';
        case '2': return 'MM';
        case '3': return 'MMM';
    }
    
    return '';
}

function hundreds(val: string): string {
    switch(val) {
        case '1': return 'C';
        case '2': return 'CC';
        case '3': return 'CCC';
        case '4': return 'CD';
        case '5': return 'D';
        case '6': return 'DC';
        case '7': return 'DCC';
        case '8': return 'DCCC';
        case '9': return 'CM';
    }
    
    return '';
}

function tens(val: string): string {
    switch(val) {
        case '1': return 'X';
        case '2': return 'XX';
        case '3': return 'XXX';
        case '4': return 'XL';
        case '5': return 'L';
        case '6': return 'LX';
        case '7': return 'LXX';
        case '8': return 'LXXX';
        case '9': return 'XC';
    }
    
    return '';
}

function ones(val: string): string {
    switch(val) {
        case '1': return 'I';
        case '2': return 'II';
        case '3': return 'III';
        case '4': return 'IV';
        case '5': return 'V';
        case '6': return 'VI';
        case '7': return 'VII';
        case '8': return 'VIII';
        case '9': return 'IX';
    }
    
    return '';
}

/**
 * Converts an integer value to its roman numeral counterpart.  Number is between 0 and 3999.
 * Speed is `O(n)`
 * 
 * @param num Number to convert to roman numerals.
 * @returns number (between 0 and 3999) converted to roman numerals.
 */
function intToRoman(num: number): string {
    const numAsString = `${num}`.split('');
    let returnStr = '';
    
    if (numAsString.length == 4) {
        returnStr += thousands(numAsString[0]);
        returnStr += hundreds(numAsString[1]);
        returnStr += tens(numAsString[2]);
        returnStr += ones(numAsString[3]);
    }
    
    if (numAsString.length == 3) {
        returnStr += hundreds(numAsString[0]);
        returnStr += tens(numAsString[1]);
        returnStr += ones(numAsString[2]);
    }
    
    if (numAsString.length == 2) {
        returnStr += tens(numAsString[0]);
        returnStr += ones(numAsString[1]);
    }
    
    if (numAsString.length == 1) {
        returnStr = ones(numAsString[0]);
    }
    
    return returnStr;
};