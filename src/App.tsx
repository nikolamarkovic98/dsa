import "./App.css";
import { StackComponent } from "./components/Stack";
import { QueueComponent } from "./components/Queue";
import { LinkedListComponent } from "./components/LinkedList";
import { BinarySearchTreeComponent } from "./components/BinarySearchTree";

function App() {
    return (
        <div className="App">
            <StackComponent />
            <QueueComponent />
            <LinkedListComponent />
            <BinarySearchTreeComponent />
        </div>
    );
}

export default App;
