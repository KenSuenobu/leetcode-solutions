/**
 * Uses an exclusive OR operation to return the value of a single number found.  Why exclusive or?  Two of the same
 * number will "or" themselves out of the value.  3 ^ 3 ^ 1: 3 will negate, 1 will remain.  Only the number that was
 * not negated will be returned, as the bitmask inverts each time on assignment.
 * 
 * Pretty cool stuff - I haven't had to use this since I was programming GUI libraries!
 * 
 * @param nums An array of numbers where only one number occurs once.
 * @returns The number that is matched one time
 */
function singleNumber(nums: number[]): number {
    let returnVal = 0;
    
    for (const num of nums) {
        returnVal ^= num;
    }
    
    return returnVal;
};
