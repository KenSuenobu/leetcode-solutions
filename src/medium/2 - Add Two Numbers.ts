class ListNode {
    val: number;
    next: ListNode | null;

    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

/**
 * Takes two numbers stored in reverse order, swaps the order, sums the two, and returns the result
 * in reverse order.  Speed is `O(log 2n)`
 * 
 * @param l1 First set of numbers to add
 * @param l2 Second set of numbers to add
 * @returns Numbers added in reverse order
 */
function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let topNode = new ListNode();
    let currentNode = topNode;
    let total = 0;
 
    while (l1 || l2 || total !== 0) {
        if (l1) {
            total += l1.val;
            l1 = l1.next;
        }
 
        if (l2) {
            total += l2.val;
            l2 = l2.next;
        }
 
        var nextNode = new ListNode(total % 10);
 
        currentNode.next = nextNode;
        currentNode = nextNode;
 
        total = parseInt(`${total/10}`);
    }
 
    return topNode.next;
 }
 