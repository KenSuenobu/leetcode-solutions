/**
 * Sort colors in-place so that colors are sorted in numerical order.  Do not use sort function from the library.
 * This isn't a super elegant solution, as the speed is currently `O(2n)`.  I could sort in place, but the only
 * sorts I really know are bubble sort - never learned anything above and beyond that.
 * 
 * Alternative solutions could be to store a hashmap with an array of 0, 1, and 2 by key.  However, this uses
 * extra allocation, and something this simple does not need code like that.
 * 
 * @param nums The numbers list to sort, with numbers 0, 1, and 2 representing red, white, and blue respectively
 */
function sortColors(nums: number[]): void {
    let numZeroes = 0;
    let numOnes = 0;
    let numTwos = 0;
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 0) {
            numZeroes++;
        }
        
        if (nums[i] == 1) {
            numOnes++;
        }
        
        if (nums[i] == 2) {
            numTwos++;
        }
    }

    for (let i = 0; i < numZeroes; i++) {
        nums[i] = 0;
    }
    
    for (let i = numZeroes; i < numZeroes + numOnes; i++) {
        nums[i] = 1;
    }

    for (let i = numZeroes + numOnes; i < numZeroes + numOnes + numTwos; i++) {
        nums[i] = 2;
    }
};