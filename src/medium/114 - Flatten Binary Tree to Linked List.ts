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
 * Flattens a binary tree into a linked list of objects.
 * 
 * @param root The binary tree to flatten all nodes to the left side
 * @returns Flattened `TreeNode` moving all tree entries from right to left in order of traversal
 */
function flatten(root: TreeNode | null): void {
    if (!root) {
        return;
    }
    
    let curr = root;
    let prev;    
    
    while (curr) {
        if (curr.left) {
            prev = curr.left;
                    
            while (prev.right) {
                prev = prev.right;
            }
            
            prev.right = curr.right;
            curr.right = curr.left;
            curr.left = null;
        }
        
        curr = curr.right;
    }
}