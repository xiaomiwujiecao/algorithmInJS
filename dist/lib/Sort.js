"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sort = /** @class */ (function () {
    function Sort() {
    }
    /**
     * @param a  {Array}
     * @param n  {Number}  the size of this array
     * */
    Sort.prototype.bubbleSort = function (a, n) {
        if (n <= 1)
            return;
        for (var i = 0; i < n; i++) {
            var flag = false;
            for (var j = 0; j < n - i - 1; j++) {
                if (a[j] > a[j + 1]) {
                    var tmp = a[j];
                    a[j] = a[j + 1];
                    a[j + 1] = tmp;
                    flag = true;
                }
            }
            if (!flag) {
                break;
            }
        }
    };
    /**
     * @param a  {Array}
     * @param n  {Number}  the size of this array
     * */
    Sort.prototype.insertionSort = function (a, n) {
        if (n <= 1)
            return;
        for (var i = 1; i < n; i++) {
            var value = a[i];
            var j = i - 1;
            for (; j >= 0; --j) {
                if (a[j] > value) {
                    a[j + 1] = a[j];
                }
                else {
                    break;
                }
            }
            a[j + 1] = value;
        }
    };
    return Sort;
}());
exports.Sort = Sort;
