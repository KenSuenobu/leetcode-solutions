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
 * Checks two `TreeNode` objects for equality.  This is an interview question for simple recursion.
 * 
 * @param p First tree to check
 * @param q Second tree to check
 * @returns `true` if the trees are identical, `false` otherwise.
 */
function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    if (!p && !q) {
        return true;
    }
    
    if ((!p || !q) || p.val != q.val) {
        return false;
    }
    
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};