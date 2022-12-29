import { useState } from "react";
import { BinarySearchTreeNode } from "../data-structures/BinarySearchTree";

function printNode(node: BinarySearchTreeNode, round: number) {
    return (
        <div className="bst-node">
            <div className="key-wrapper">
                <span className="key">{node.key}</span>
            </div>
            {node.left || node.right ? (
                <div className="children">
                    {node.left ? (
                        <div
                            className="child"
                            style={{
                                right: 200 / round,
                            }}
                        >
                            {printNode(node.left, round + 1)}
                        </div>
                    ) : null}
                    {node.right ? (
                        <div className="child" style={{ left: 200 / round }}>
                            {printNode(node.right, round + 1)}
                        </div>
                    ) : null}
                </div>
            ) : null}
        </div>
    );
}

export function BinarySearchTreeComponent() {
    const [bst, setBst] = useState(new BinarySearchTreeNode(100));

    function insertNode() {
        setBst((prevBst) => {
            const key = Math.floor(Math.random() * 200);
            prevBst.insert(key);
            const newBst = new BinarySearchTreeNode(100);
            newBst.left = prevBst.left;
            newBst.right = prevBst.right;
            return newBst;
        });
    }

    return (
        <section className="bst-representation">
            <h2>Binary Search Tree</h2>
            <div className="bst-controls">
                <button onClick={insertNode}>Insert</button>
                <button>Remove</button>
                <button onClick={() => setBst(new BinarySearchTreeNode(100))}>
                    Clear Tree
                </button>
            </div>
            <main>
                <div className="bst">{printNode(bst, 1)}</div>
            </main>
        </section>
    );
}
