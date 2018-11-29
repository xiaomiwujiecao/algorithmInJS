"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ArrayStack {
    constructor(n) {
        this.items = new Array(n);
        this.n = n;
        this.count = 0;
    }
    /**
     * push
     * */
    push(item) {
        if (this.count == this.n)
            return false;
        this.items[this.count] = item;
        ++this.count;
        return true;
    }
    /**
     * pop
     *
     * */
    pop() {
        if (this.count == 0)
            return null;
        //  return the unit  of this array that index is [count -1 ]
        let tmp = this.items[this.count - 1];
        --this.count;
        return tmp;
    }
}
exports.ArrayStack = ArrayStack;
