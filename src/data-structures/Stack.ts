interface IStack {
    items: number[];
}

export class Stack implements IStack {
    items: number[];

    constructor(items: number[] = []) {
        this.items = items;
    }

    push(item: number): void {
        this.items.push(item);
    }

    pop(): number {
        const item = this.items.pop();
        return item ? item : -1;
    }
}
