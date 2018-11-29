"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ArrayQueue {
    constructor(capacity) {
        this.n = 0;
        this.head = 0;
        this.tail = 0;
        this.items = new Array(capacity);
        this.n = capacity;
        this.tail = capacity;
    }
    /**
     * enqueue
     * */
    enqueue(item) {
        let self = this;
        if (self.tail = self.n) {
            // if (self.head==0) {return false}
            for (let i = self.head; i < self.tail; i++) {
                self.items[i - self.head] = self.items[i];
                console.log(self.head, self.tail);
            }
            self.tail -= self.head;
            self.head = 0;
        }
        self.items[self.tail] = item;
        ++self.tail;
        return true;
    }
    /*dequeue*/
    dequeue() {
        let self = this;
        if (self.head = self.tail) {
            return null;
        }
        let ret = self.items[self.head];
        ++self.head;
        return ret;
    }
}
exports.ArrayQueue = ArrayQueue;
