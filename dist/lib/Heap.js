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
    Heap.prototype.removeMax = function () {
        if (this.count == 0) {
            return -1;
        }
        this.a[1] = this.a[this.count];
        --this.count;
        this.heapify(this.a, this.count, 1);
    };
    Heap.prototype.heapify = function (a, n, i) {
        while (true) {
            var maxPos = i;
            if (i * 2 < this.n && a[i] < a[i * 2]) {
                maxPos = i * 2;
            }
            if (i * 2 + 1 <= n && a[maxPos] < a[i * 2 + 1]) {
                maxPos = i * 2 + 1;
            }
            if (maxPos == i) {
                break;
            }
            this.swap(a, i, maxPos);
        }
    };
    Heap.prototype.buildHelp = function (a, n) {
        for (var i = Math.floor(n / 2); i >= 1; --i) {
            this.heapify(a, n, i);
        }
    };
    Heap.prototype.sort = function (a, n) {
        this.buildHelp(a, n);
        var k = n;
        while (k > 1) {
            this.swap(a, 1, k);
            --k;
            this.heapify(a, k, 1);
        }
    };
    return Heap;
}());
exports.Heap = Heap;
