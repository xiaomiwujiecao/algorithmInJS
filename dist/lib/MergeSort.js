"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MergeSort = /** @class */ (function () {
    function MergeSort(a, n) {
        this.a = a;
        this.n = n;
    }
    MergeSort.prototype.mergeSortInternally = function (a, p, r) {
        if (r === void 0) { r = this.n; }
        try {
            if (p >= r)
                return;
            var q = p + (r - p) / 2;
            this.mergeSortInternally(a, p, q);
            this.mergeSortInternally(a, q + 1, r);
            this.merge(a, p, q, r);
        }
        catch (err) {
            console.error(err);
            return;
        }
    };
    MergeSort.prototype.merge = function (a, p, q, r) {
        var i = p;
        var j = q + 1;
        var k = 0;
        var len = (r - p + 1).toFixed(0);
        console.log('len::', len);
        var tmp = [];
        while (i <= q && j <= r) {
            if (a[i] <= a[j]) {
                tmp[k++] = a[i++];
            }
            else {
                tmp[k++] = a[j++];
            }
        }
        var start = i;
        var end = q;
        if (j <= r) {
            start = j;
            end = r;
        }
        while (start <= end) {
            tmp[k++] = a[start++];
        }
        for (var i_1 = 0; i_1 <= r - p; ++i_1) {
            a[p + i_1] = tmp[i_1];
        }
    };
    return MergeSort;
}());
exports.MergeSort = MergeSort;
