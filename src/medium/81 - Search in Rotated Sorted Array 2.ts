/**
 * This is a straightforward search.  No matter where the numbers might pivot, alternate, or
 * rotate.  The number search is always straightforward.  Speed is `O(n)`.  If this was not
 * understood well, and this code does not match, the brief was misleading.
 * 
 * @param nums Array of values to search for
 * @param target The target number to find
 * @returns `true` if found, `false` otherwise.
 */
function search(nums: number[], target: number): boolean {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == target) {
            return true;
        }
    }
    
    return false;
};