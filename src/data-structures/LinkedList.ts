interface ILinkedList {
    head: LinkedListNode | null;
    length: number;
}

interface ILinkedListNode {
    value: number;
    next: ILinkedListNode | null;
}

export class LinkedList implements ILinkedList {
    head: LinkedListNode | null;
    length: number;

    constructor(head: LinkedListNode | null = null) {
        this.head = head;
        this.length = 0;
    }

    insertFirst(value: number) {
        if (!this.head) {
            this.head = new LinkedListNode(value);
        } else {
            this.head = new LinkedListNode(value, this.head);
        }

        this.length++;
    }

    insertLast(value: number) {
        if (!this.head) {
            this.head = new LinkedListNode(value);
        } else {
            let currentNode: LinkedListNode | null = this.head;
            while (currentNode?.next !== null) {
                currentNode = currentNode.next;
            }
            currentNode.next = new LinkedListNode(value);
        }

        this.length++;
    }

    removeFirst() {
        if (!this.head) return;
        this.head = this.head.next;
        this.length--;
    }

    removeLast() {
        if (!this.head) return;

        if (this.length === 1) {
            this.head = null;
        } else {
            let currentNode: LinkedListNode | null = this.head;
            while (currentNode?.next?.next !== null) {
                currentNode = currentNode?.next ? currentNode.next : null;
            }
            currentNode.next = null;
        }

        this.length--;
    }

    clear() {
        this.head = null;
        this.length = 0;
    }

    traverse(
        cb: (
            node: LinkedListNode,
            index: number,
            linkedList: LinkedList
        ) => void
    ) {
        let currentNode = this.head;
        let index = 0;
        while (currentNode !== null) {
            cb(currentNode, index, this);
            currentNode = currentNode.next;
            index++;
        }
    }

    map(
        cb: (
            node: LinkedListNode,
            index: number,
            linkedList: LinkedList
        ) => JSX.Element
    ): JSX.Element[] {
        const jsx: JSX.Element[] = [];
        this.traverse((node, index) => jsx.push(cb(node, index, this)));
        return jsx;
    }

    printList() {
        this.traverse((node) => console.log(node));
    }
}

export class LinkedListNode implements ILinkedListNode {
    value: number;
    next: ILinkedListNode | null;

    constructor(value: number, next: ILinkedListNode | null = null) {
        this.value = value;
        this.next = next;
    }
}
