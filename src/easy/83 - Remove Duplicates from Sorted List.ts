class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

/**
 * Removes duplicate values from a sorted linked list.  The linked list is required to be sorted, or the list may
 * contain duplicates.
 * 
 * @param head The linked list from which to remove duplicates - must be sorted.
 * @returns List of non-duplicated items from the head list.
 */
function deleteDuplicates(head: ListNode | null): ListNode | null {
    if (!head) {
        return null;
    }
    
    const newHead = new ListNode(head.val);
    let current = newHead;
    
    while (head.next) {
        head = head.next;
        if (head.val != current.val) {
            const nextNode = new ListNode(head.val);
            
            current.next = nextNode;
            current = nextNode;
        }
    }
    
    return newHead;
};