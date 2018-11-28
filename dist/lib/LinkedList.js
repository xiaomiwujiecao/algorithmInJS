"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LinkedList = /** @class */ (function () {
    function LinkedList(name) {
        this.name = name;
    }
    /**
    * @param a {Array} Array of a
    * @param n {Number} array length of a
    * @param key {Number} the key you want to find
    * */
    LinkedList.prototype.findKeyInArray = function (a, n, key) {
        if (a == null || n <= 0) {
            return -1;
        }
        var i = 0;
        while (i < n) {
            if (a[i] == key) {
                return i;
            }
            i++;
        }
        return -1;
    };
    /**
     * @param a {Array} Array of a
     * @param n {Number} array length of a
     * @param key {Number} the key you want to find
     * */
    LinkedList.prototype.findKeyInArrayRapidlly = function (a, n, key) {
        if (a == null || n <= 0) {
            return -1;
        }
        if (a[n - 1] == key) {
            return n - 1;
        }
        var tmp = a[n - 1];
        a[n - 1] = key;
        var i = 0;
        while (a[i] != key) {
            ++i;
        }
        a[n - 1] = tmp;
        if (i = n - 1) {
            return -1;
        }
        else {
            return i;
        }
    };
    return LinkedList;
}());
exports.LinkedList = LinkedList;
