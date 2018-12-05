"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Heap = /** @class */ (function () {
    function Heap(capacity) {
        this.a = new Array(capacity + 1);
        this.n = capacity;
        this.count = 0;
    }
    Heap.prototype.insert = function (data) {
        if (this.count >= this.n)
            return;
        ++this.count;
        this.a[this.count] = data;
        var i = this.count;
        while (i / 2 > 0 && this.a[i] > this.a[i / 2]) {
            this.swap(this.a, i, Math.floor(i / 2));
        }
    };
    Heap.prototype.swap = function (a, i, max) {
        var tmp = this.a[i];
        a[i] = a[max];
        a[max] = tmp;
    };
    return Heap;
}());
exports.Heap = Heap;
