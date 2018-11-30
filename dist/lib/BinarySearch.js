"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BinarySearch = /** @class */ (function () {
    function BinarySearch(a, n, val) {
    }
    BinarySearch.prototype.bsearchInternally = function (a, low, high, value) {
        if (low > high) {
            this.result = -1;
            return this.result;
        }
        var mid = low + ((high - low) >> 1);
        console.log('mid::', mid);
        // console.log('a[mid]::',a[mid])
        if (a[mid] == value) {
            console.log('find it ::', value);
            this.result = mid;
            return mid;
        }
        else if (a[mid] < value) {
            return this.bsearchInternally(a, mid + 1, high, value);
        }
        else {
            return this.bsearchInternally(a, low, mid - 1, value);
        }
    };
    return BinarySearch;
}());
exports.BinarySearch = BinarySearch;
