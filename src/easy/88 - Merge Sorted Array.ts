/**
 * Merge `nums1` to `nums2`, storing the values in `nums1` in-place with a non-decreasing order sorted afterward.
 * 
 * @param nums1 First array to combine the results from num2 against, already allocated with room
 * @param m The number of elements in the first array
 * @param nums2 Second array to combine results to num1
 * @param n The number of records in num2
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    const nums1Len = m;
    
    for (let pos = 0; pos < n; pos++) {
        nums1[nums1Len + pos] = nums2[pos];
    }
    
    nums1 = nums1.sort((a, b) => a - b);
};