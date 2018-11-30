"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CountingSort = /** @class */ (function () {
    function CountingSort() {
    }
    /**
     * @param a {Array} array
     * @param n {Number} the size of this array
     *
     * */
    CountingSort.countingSort = function (a, n) {
        if (n <= 1)
            return;
        var max = a[0];
        for (var i = 1; i < n; i++) {
            if (max < a[i]) {
                max = a[i];
            }
        }
        var c = new Array(max + 1);
        for (var i = 0; i < max + 1; i++) {
            c[i] = 0;
        }
        for (var i = 0; i < n; ++i) {
            c[a[i]]++;
        }
        for (var i = 1; i < max + 1; ++i) {
            c[i] = c[i - 1] + c[i];
        }
        //   tmp
        var r = new Array(n);
        for (var i = n - 1; i >= 0; --i) {
            var index = c[a[i]] - 1;
            r[index] = a[i];
            c[a[i]]--;
        }
        //   copy to array a
        for (var i = 0; i < n; ++i) {
            a[i] = r[i];
        }
    };
    return CountingSort;
}());
exports.CountingSort = CountingSort;
