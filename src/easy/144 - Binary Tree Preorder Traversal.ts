class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

/**
 * Traverses a `TreeNode` recursively for its values.
 * 
 * @param root Root tree node to traverse data
 * @param nums The resulting list of numbers found from the traversal
 * @returns 
 */
function traverse(root: TreeNode | null, nums: number[]) {
    if (!root) {
        return;
    }
    
    nums.push(root.val);
    
    traverse(root.left, nums);
    traverse(root.right, nums);
}

/**
 * Walk a `TreeNode` binary tree and return all of its values.
 * 
 * @param root Root `TreeNode` to traverse.
 * @returns Array of numbers found from the tree traversal.
 */
function preorderTraversal(root: TreeNode | null): number[] {
    const nums: number[] = [];
    
    traverse(root, nums);
    
    return nums;
};