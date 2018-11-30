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
    BinarySearch.prototype.bsearchFirstElement = function (a, n, value) {
        var low = 0;
        var high = n - 1;
        while (low <= high) {
            var mid = low + ((high - low) >> 1);
            if (a[mid] > value) {
                high = mid - 1;
            }
            else if (a[mid] < value) {
                low = mid + 1;
            }
            else {
                if ((mid == 0) || (a[mid - 1] != value)) {
                    return mid;
                }
                else {
                    high = mid - 1;
                }
            }
        }
    };
    BinarySearch.prototype.bsearchLastElement = function (a, n, value) {
        var low = 0;
        var high = n - 1;
        while (low <= high) {
            var mid = low + ((high - low) >> 1);
            if (a[mid] > value) {
                high = mid - 1;
            }
            if (a[mid] < value) {
                low = mid + 1;
            }
            if ((mid == n - 1) || (a[mid + 1] != value)) {
                return mid;
            }
            else {
                low = mid + 1;
            }
        }
    };
    BinarySearch.prototype.bsearchFirstGTE = function (a, n, value) {
        var low = 0;
        var high = n - 1;
        while (low <= high) {
            var mid = low + ((high - low) >> 1);
            if (a[mid] > value) {
                if ((mid == n - 1) || (a[mid + 1] != value)) {
                    return mid;
                }
                else {
                    low = mid + 1;
                }
            }
        }
        return -1;
    };
    BinarySearch.prototype.nsearchLastLTE = function (a, n, value) {
        var low = 0;
        var high = n - 1;
        while (low <= high) {
            var mid = low + ((high - low) >> 1);
            if (a[mid] > value) {
                high = mid + 1;
            }
            else {
                if ((mid == n - 1) || (a[mid + 1] != value)) {
                    return mid;
                }
                else {
                    low = mid + 1;
                }
            }
        }
        return -1;
    };
    return BinarySearch;
}());
exports.BinarySearch = BinarySearch;
