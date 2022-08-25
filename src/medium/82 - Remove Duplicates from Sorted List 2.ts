class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

/**
 * Removes duplicate values from a sorted list of values in a `ListNode`.  Any numbers appearing more than
 * once are removed from the list entirely - only values with 1 occurrence are kept.
 * 
 * FIXME: OPTIMIZE ME!
 * 
 * @param head Remove duplicates from a sorted list.
 * @returns ListNode pointing to head of the sorted list.
 */
function deleteDuplicates(head: ListNode | null): ListNode | null {
    if (!head) {
        return null;
    }
    
    let seenDigits = {};
    
    while (head) {
        if (!seenDigits[head.val]) {
            seenDigits[head.val] = 0;
        }
        
        seenDigits[head.val] += 1;
        
        head = head.next;
    }
    
    let headNode = null, currentNode = null;
    
    for (const key of Object.keys(seenDigits).sort((a, b) => parseInt(a) - parseInt(b))) {
        if (seenDigits[key] === 1) {
            if (!headNode) {
                headNode = new ListNode(parseInt(key));
                currentNode = headNode;
            } else {
                const nextNode = new ListNode(parseInt(key));
                
                currentNode.next = nextNode;
                currentNode = nextNode;
            }
        }
    }
    
    return headNode;
};