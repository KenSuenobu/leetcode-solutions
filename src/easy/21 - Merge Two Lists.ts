class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

/**
 * Merges two numeric lists of any size, sorts that list, and returns the `head` of the sorted link list.
 * 
 * @param list1 First linked list to add
 * @param list2 Second linked list to add
 * @returns Sorted result of the two lists
 */
function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    const l1: number[] = [];
    const l2: number[] = [];
    
    while (list1) {
        l1.push(list1.val);
        list1 = list1.next;
    }
    
    while (list2) {
        l2.push(list2.val);
        list2 = list2.next;
    }
    
    const finalList = [...l1, ...l2].sort((a, b) => a - b);
    
    if (finalList.length === 0) {
        return null;
    }
    
    let currentNode = new ListNode(finalList.shift());
    let head = currentNode;
    
    finalList.forEach((x) => {
        const newNode = new ListNode(x);
        currentNode.next = newNode;
        currentNode = newNode;
    });
    
    return head;
}
