/**
 * Takes an array of literally any size containing numbers, and looks through the array for two numbers 
 * that match the target.  Assumes there is only one solution.  Speed is `O(n^2)`.
 * 
 * @param nums Array of numbers
 * @param target The target to find
 * @returns Array of two numbers matching the positions in `nums` that add up to equal the target
 */
function twoSum(nums: number[], target: number): number[] {
    for (let x = 0; x < nums.length; x++) {
        for (let y = 0; y < nums.length; y++) {
            if (x == y) {
                continue;
            }
 
            if (nums[x] + nums[y] === target) {
                return [x, y];
            }
        }
    }
 
    return [0, 0];
 };
 