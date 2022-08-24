/**
 * Searches an array to see where a number can be inserted in numerical order.
 * Speed is `O(log n)`
 * 
 * @param nums Sorted list of numbers in which to search against
 * @param target The target to potentially insert
 * @returns Position at which the target would be inserted into the array
 */
 function searchInsert(nums: number[], target: number): number {
    for (let i = 0; i < nums.length; i++) {
        if (target < nums[i]) {
            return i;
        } else if (nums[i] < target && nums[i + 1] > target) {
            return i + 1;
        } else if (nums[i] == target) {
            return i;
        }
    }
    
    return nums.length;
};