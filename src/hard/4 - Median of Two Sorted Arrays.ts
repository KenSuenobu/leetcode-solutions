/**
 * Takes a list of numbers in any order, and finds the median of the values in the array.
 * Speed is `O(log n+m)`
 * 
 * @param nums1 First array of numbers
 * @param nums2 Second array of numbers
 * @returns 
 */
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    const combined = [...nums1, ...nums2].sort((a, b) => a - b);
    
    // Shortcut: If an array is oddly sized, the median will always be the single digit in the
    // center.  Otherwise, we take the median, start one lower than the offset (0 offset), and
    // add the number directly next to it, divide by two, and return the result.
    return (combined.length % 2 == 1) ? combined[Math.round(combined.length / 2) - 1] :
           (combined[Math.round(combined.length / 2) - 1] + combined[Math.round(combined.length / 2)]) / 2;
};