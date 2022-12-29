import { useState } from "react";
import { Stack } from "../data-structures/Stack";

export function StackComponent() {
    const [stack, setStack] = useState(new Stack());

    function addToStack() {
        setStack((s) => {
            s.push(s.items.length + 1);
            return new Stack(s.items);
        });
    }

    function popFromStack() {
        setStack((s) => {
            s.pop();
            return new Stack(s.items);
        });
    }

    return (
        <section className="stack-representation">
            <h2>Stack</h2>
            <main>
                <div className="stack">
                    {stack.items.map((item) => (
                        <div key={item} className="stack-item">
                            {item}
                        </div>
                    ))}
                </div>
                <div className="stack-controls">
                    <button onClick={addToStack}>Push To Stack</button>
                    <button onClick={popFromStack}>Pop From Stack</button>
                    <button onClick={() => setStack(new Stack())}>
                        Clear Stack
                    </button>
                </div>
            </main>
        </section>
    );
}
