interface IQueue {
    items: number[];
}

export class Queue implements IQueue {
    items: number[];

    constructor(items: number[] = []) {
        this.items = items;
    }

    enqueue(item: number) {
        this.items.push(item);
    }

    dequeue(): number {
        const item = this.items.shift();
        return item ? item : NaN;
    }
}
