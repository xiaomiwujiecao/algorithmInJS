"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LinkedList {
    constructor(name) {
        this.name = name;
    }
    /**
     * @param a {Array} Array of a
     * @param n {Number} array length of a
     * @param key {Number} the key you want to find
     * */
    findKeyInArray(a, n, key) {
        if (a == null || n <= 0) {
            return -1;
        }
        let i = 0;
        while (i < n) {
            if (a[i] == key) {
                return i;
            }
            i++;
        }
        return -1;
    }
    /**
     * @param a {Array} Array of a
     * @param n {Number} array length of a
     * @param key {Number} the key you want to find
     * */
    findKeyInArrayRapidlly(a, n, key) {
        if (a == null || n <= 0) {
            return -1;
        }
        if (a[n - 1] == key) {
            return n - 1;
        }
        let tmp = a[n - 1];
        a[n - 1] = key;
        let i = 0;
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
    }
}
exports.LinkedList = LinkedList;
