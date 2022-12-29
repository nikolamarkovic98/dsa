import { useState } from "react";
import { Queue } from "../data-structures/Queue";

export function QueueComponent() {
    const [queue, setQueue] = useState(new Queue());

    function enqueue() {
        setQueue((q) => {
            q.enqueue(q.items.length + 1);
            return new Queue(q.items);
        });
    }

    function dequeue() {
        setQueue((q) => {
            q.dequeue();
            return new Queue(q.items);
        });
    }

    return (
        <section className="queue-representation">
            <h2>Queue</h2>
            <main>
                <div className="queue">
                    {queue.items.map((item) => (
                        <div key={item} className="queue-item">
                            {item}
                        </div>
                    ))}
                </div>
                <div className="queue-controls">
                    <button onClick={enqueue}>Queue item</button>
                    <button onClick={dequeue}>Enqueue item</button>
                    <button onClick={() => setQueue(new Queue())}>
                        Clear Queue
                    </button>
                </div>
            </main>
        </section>
    );
}
