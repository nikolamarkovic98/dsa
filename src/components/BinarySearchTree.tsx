import { useRef, useState } from "react";
import { BinarySearchTreeNode } from "../data-structures/BinarySearchTree";

function printNodeSvg(
    node: BinarySearchTreeNode,
    round: number,
    cx: number
): JSX.Element {
    const yOffset = round === 1 ? 22 : 40 * round;

    return (
        <>
            {node.left ? (
                <path
                    d={`M ${cx} ${yOffset} l -${200 / round} ${
                        round === 1 ? 58 : 40
                    }`}
                    strokeWidth="2"
                    stroke="black"
                />
            ) : null}
            {node.right ? (
                <path
                    d={`M ${cx} ${yOffset} l ${200 / round} ${
                        round === 1 ? 58 : 40
                    }`}
                    strokeWidth="2"
                    stroke="black"
                />
            ) : null}
            <circle
                cx={cx}
                cy={yOffset}
                r="20"
                stroke="green"
                strokeWidth="4"
                fill="yellow"
            />
            <text
                x={cx}
                y={yOffset + 4}
                fill="blue"
                stroke="black"
                textAnchor="middle"
            >
                {node.key}
            </text>
            {node.left ? (
                <>{printNodeSvg(node.left, round + 1, cx - 200 / round)}</>
            ) : null}
            {node.right ? (
                <>{printNodeSvg(node.right, round + 1, cx + 200 / round)}</>
            ) : null}
        </>
    );
}

export function BinarySearchTreeComponent() {
    const [bst, setBst] = useState(new BinarySearchTreeNode(100));
    const removeRef = useRef<HTMLInputElement>(null);

    function insertNode() {
        setBst((prevBst) => {
            const key = Math.floor(Math.random() * 200);
            prevBst.insert(key);
            return refreshTree(prevBst);
        });
    }

    function removeByValue() {
        const { current } = removeRef;
        if (!current) return;

        const value = Number(current.value.trim());
        if (!value || isNaN(value)) return;

        setBst((prevBst) => {
            prevBst.remove(value);
            return refreshTree(prevBst);
        });
    }

    function refreshTree(prevBst: BinarySearchTreeNode) {
        const newBst = new BinarySearchTreeNode(100);
        newBst.left = prevBst.left;
        newBst.right = prevBst.right;
        return newBst;
    }

    return (
        <section className="bst-representation">
            <h2>Binary Search Tree</h2>
            <div className="bst-controls">
                <button onClick={insertNode}>Insert</button>
                <div>
                    <button onClick={removeByValue}>Remove By Value</button>
                    <input type="text" ref={removeRef} />
                </div>
                <button onClick={() => setBst(new BinarySearchTreeNode(100))}>
                    Clear Tree
                </button>
            </div>
            <svg width="100%" height="50vh">
                Sorry, your browser does not support inline SVG.
                {printNodeSvg(bst, 1, window.innerWidth / 2)}
            </svg>
        </section>
    );
}
