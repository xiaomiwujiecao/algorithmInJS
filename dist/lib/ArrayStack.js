"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ArrayStack = /** @class */ (function () {
    function ArrayStack(n) {
        this.items = new Array(n);
        this.n = n;
        this.count = 0;
    }
    /**
     * push
     * */
    ArrayStack.prototype.push = function (item) {
        if (this.count == this.n)
            return false;
        this.items[this.count] = item;
        ++this.count;
        return true;
    };
    /**
     * pop
     *
     * */
    ArrayStack.prototype.pop = function () {
        if (this.count == 0)
            return null;
        //  return the unit  of this array that index is [count -1 ]
        var tmp = this.items[this.count - 1];
        --this.count;
        return tmp;
    };
    return ArrayStack;
}());
exports.ArrayStack = ArrayStack;
