/**
 * Image "bit" flip - array of 0s and 1s is flipped and inverted for each matrix.
 * 
 * @param image Matrix of values to switch - each row is flipped horizontally, and inverted
 * @returns Inverted and horizontally flipped matrix.
 */
function flipAndInvertImage(image: number[][]): number[][] {
    for (let i = 0; i < image.length; i++) {
        image[i] = image[i].reverse()
            .map((x) => x === 1 ? 0 : 1);
    }
    
    return image;
};