import { useState } from "react";
import { LinkedList } from "../data-structures/LinkedList";

export function LinkedListComponent() {
    const [linkedList, setLinkedList] = useState(new LinkedList());

    function insertFirst() {
        setLinkedList((prevLinkedList) => {
            prevLinkedList.insertFirst(prevLinkedList.length + 1);
            const newLinkedList = new LinkedList(prevLinkedList.head);
            newLinkedList.length = prevLinkedList.length;
            return newLinkedList;
        });
    }

    function insertLast() {
        setLinkedList((prevLinkedList) => {
            prevLinkedList.insertLast(prevLinkedList.length + 1);
            const newLinkedList = new LinkedList(prevLinkedList.head);
            newLinkedList.length = prevLinkedList.length;
            return newLinkedList;
        });
    }

    function removeFirst() {
        setLinkedList((prevLinkedList) => {
            prevLinkedList.removeFirst();
            const newLinkedList = new LinkedList(prevLinkedList.head);
            newLinkedList.length = prevLinkedList.length;
            return newLinkedList;
        });
    }

    function removeLast() {
        setLinkedList((prevLinkedList) => {
            prevLinkedList.removeLast();
            const newLinkedList = new LinkedList(prevLinkedList.head);
            newLinkedList.length = prevLinkedList.length;
            return newLinkedList;
        });
    }

    return (
        <section className="linked-list-representation">
            <h2>Linked List</h2>
            <main>
                <div className="linked-list">
                    {linkedList.map((node, i) => (
                        <>
                            <div key={node.value} className="linked-list-item">
                                {node.value}
                            </div>
                            {i !== linkedList.length - 1 ? (
                                <span>{">"}</span>
                            ) : null}
                        </>
                    ))}
                </div>
                <div className="linked-list-controls">
                    <button onClick={insertFirst}>Insert First</button>
                    <button onClick={insertLast}>Insert Last</button>
                    <button onClick={removeFirst}>Remove First</button>
                    <button onClick={removeLast}>Remove Last</button>
                    <button onClick={() => setLinkedList(new LinkedList())}>
                        Clear Linked List
                    </button>
                </div>
            </main>
        </section>
    );
}
