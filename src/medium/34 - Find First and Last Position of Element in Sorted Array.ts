/**
 * Searches for the first and last occurrence of a target against a numbered array.  Speed is potentially faster
 * than `O(log n)` - potentially `O(log n/2)`
 * 
 * @param nums The array of numbers to search against
 * @param target The target to search for
 * @returns The first and last occurrence of target's position in the `nums` array, or -1 if not found.
 */
 function searchRange(nums: number[], target: number): number[] {
    if (nums.length === 0) {
        return [-1, -1];
    }
    
    let first = -1;
    let last = -1;
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            if (first === -1) {
                first = last = i;
                break;
            }
        }
    }
    
    if (last !== -1) {
        for (let i = nums.length; i > 0; i--) {
            if (nums[i] === target) {
                last = i;
                break;
            }
        }
    }
    
    return [first, last];
};