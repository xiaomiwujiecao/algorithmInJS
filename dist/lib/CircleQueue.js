"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CircleQueue {
    constructor(capacity) {
        this.n = 0;
        this.head = 0;
        this.tail = 0;
        this.items = new Array(capacity);
        this.n = capacity;
    }
    enqueue(item) {
        let condition = (this.tail + 1) % this.n == this.head;
        if (condition)
            return false;
        this.items[this.tail] = item;
        this.tail = (this.tail + 1) % this.n;
        return true;
    }
    dequeue() {
        if (this.tail == this.head)
            return null;
        let ret = this.items[this.head];
        this.head = (this.head + 1) % this.n;
        return ret;
    }
}
exports.CircleQueue = CircleQueue;
