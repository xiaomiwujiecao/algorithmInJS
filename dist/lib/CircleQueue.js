"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CircleQueue = /** @class */ (function () {
    function CircleQueue(capacity) {
        this.n = 0;
        this.head = 0;
        this.tail = 0;
        this.items = new Array(capacity);
        this.n = capacity;
    }
    CircleQueue.prototype.enqueue = function (item) {
        var condition = (this.tail + 1) % this.n == this.head;
        if (condition) {
            return false;
        }
        this.items[this.tail] = item;
        this.tail = (this.tail + 1) % this.n;
        return true;
    };
    CircleQueue.prototype.dequeue = function () {
        if (this.tail == this.head)
            return null;
        var ret = this.items[this.head];
        this.head = (this.head + 1) % this.n;
        return ret;
    };
    return CircleQueue;
}());
exports.CircleQueue = CircleQueue;
