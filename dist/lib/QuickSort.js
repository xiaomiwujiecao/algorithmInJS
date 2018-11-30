"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var QuickSort = /** @class */ (function () {
    function QuickSort(a, n) {
        QuickSort.quickSortInternally(a, 0, n - 1);
    }
    QuickSort.quickSortInternally = function (a, p, r) {
        if (p >= r)
            return;
        var q = QuickSort.partition(a, p, r); // 获取分区点
        QuickSort.quickSortInternally(a, p, q - 1);
        QuickSort.quickSortInternally(a, q + 1, r);
    };
    /**
     * @param a {Array}
     * @param p  start index
     * @param r end index
     * */
    QuickSort.partition = function (a, p, r) {
        var pivot = a[r];
        var i = p;
        for (var j = p; j < r; ++j) {
            if (a[j] < pivot) {
                var tmp_1 = a[i];
                a[i] = a[j];
                a[j] = tmp_1;
                ++i;
            }
        }
        var tmp = a[i];
        a[i] = a[r];
        a[r] = tmp;
        console.log("i=" + i);
        return i;
    };
    return QuickSort;
}());
exports.QuickSort = QuickSort;
