class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

/**
 * Takes `n` number of `ListNode` objects and sorts them.
 * 
 * @param lists List of linked lists to sort.
 * @returns Head of sorted linked list result.
 */
function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
    let finalList: number[] = [];
    
    for (let node of lists) {
        while (node) {
            finalList.push(node.val);
            node = node.next;
        }
    }
    
    finalList = finalList.sort((a, b) => a - b);
    
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
};