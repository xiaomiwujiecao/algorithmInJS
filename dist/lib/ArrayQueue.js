"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ArrayQueue = /** @class */ (function () {
    function ArrayQueue(capacity) {
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
    ArrayQueue.prototype.enqueue = function (item) {
        var self = this;
        if (self.tail = self.n) {
            // if (self.head==0) {return false}
            for (var i = self.head; i < self.tail; i++) {
                self.items[i - self.head] = self.items[i];
                console.log(self.head, self.tail);
            }
            self.tail -= self.head;
            self.head = 0;
        }
        self.items[self.tail] = item;
        ++self.tail;
        return true;
    };
    /*dequeue*/
    ArrayQueue.prototype.dequeue = function () {
        var self = this;
        if (self.head = self.tail) {
            return null;
        }
        var ret = self.items[self.head];
        ++self.head;
        return ret;
    };
    return ArrayQueue;
}());
exports.ArrayQueue = ArrayQueue;
