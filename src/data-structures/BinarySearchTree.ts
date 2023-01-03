export interface IBinarySearchTreeNode {
    key: number;
    left: BinarySearchTreeNode | null;
    right: BinarySearchTreeNode | null;
    insert: (key: number) => void;
    search: (key: number) => boolean;
    printInorder: () => void;
    printPreorder: () => void;
    printPostorder: () => void;
}

export class BinarySearchTreeNode implements IBinarySearchTreeNode {
    key: number;
    left: BinarySearchTreeNode | null;
    right: BinarySearchTreeNode | null;

    constructor(key: number) {
        this.key = key;
        this.left = null;
        this.right = null;
    }

    insert(key: number) {
        if (this.key > key) {
            // move left
            if (this.left === null) {
                this.left = new BinarySearchTreeNode(key);
            } else {
                this.left.insert(key);
            }
        } else if (this.key < key) {
            // move right
            if (this.right === null) {
                this.right = new BinarySearchTreeNode(key);
            } else {
                this.right.insert(key);
            }
        }
    }

    remove(key: number) {
        if (this.left && this.key > key) {
            if (this.left.key === key) {
                this.left = null;
            } else {
                this.left.remove(key);
            }
        } else if (this.right && this.key < key) {
            if (this.right.key === key) {
                this.right = null;
            } else {
                this.right.remove(key);
            }
        }
    }

    search(key: number): boolean {
        if (this.key > key) {
            // move left
            return this.left ? this.left.search(key) : false;
        } else if (this.key < key) {
            // move right
            return this.right ? this.right.search(key) : false;
        }

        return true;
    }

    // Print left subtree, print the root, print right subtree
    printInorder() {
        this.left?.printInorder();
        console.log(this.key);
        this.right?.printInorder();
    }

    // Print the root, print left subtree, print right subtree
    printPreorder() {
        console.log(this.key);
        this.left?.printPreorder();
        this.right?.printPreorder();
    }

    // Print the left subtree, print right subtree, print the root
    printPostorder() {
        this.left?.printPreorder();
        this.right?.printPreorder();
        console.log(this.key);
    }
}
