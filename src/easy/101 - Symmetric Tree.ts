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
 * Checks the mirror values of each side of the `TreeNode`  Simple double recursion question.
 * 
 * @param left Left side to match
 * @param right Right side to match
 * @returns `true` if symmetric, `false` otherwise
 */
function isMirror(left: TreeNode | null, right: TreeNode | null): boolean {
    if (!left && !right) {
        return true;
    }
    
    if (!left || !right) {
        return false;
    }
    
    if (left.val != right.val) {
        return false;
    }
    
    const leftEqual = isMirror(left.left, right.right);
    const rightEqual = isMirror(left.right, right.left);
    
    return leftEqual && rightEqual;
}

/**
 * Checks to see if a `TreeNode` is equal to the mirror of each side.
 * 
 * @param root Root `TreeNode` to check
 * @returns `true` if symmetric, `false` otherwise.
 */
function isSymmetric(root: TreeNode | null): boolean {
    if (!root) {
        return false;
    }
    
    return isMirror(root.left, root.right);
};