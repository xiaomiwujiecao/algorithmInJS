"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Nodes = /** @class */ (function () {
    function Nodes(data) {
        this.data = data;
    }
    Nodes.prototype.find = function (data) {
        var p = this.tree;
        while (p != null) {
            if (data < p.data) {
                p = p.left;
            }
            else if (data > p.data) {
                p = p.right;
            }
            else
                return p;
        }
        return null;
    };
    Nodes.prototype.insert = function (data) {
        if (!this.tree) {
            this.tree = new Nodes(data);
            return;
        }
        var p = this.tree;
        if (data > p.data) {
            if (!p.right) {
                p.right = new Nodes(data);
                return;
            }
            p = p.right;
        }
        else {
            if (!p.left) {
                p.left = new Nodes(data);
                return;
            }
            p = p.left;
        }
    };
    Nodes.prototype.delete = function (data) {
        var p = this.tree;
        var pp = null;
        while (!p && p.data != data) {
            pp = p;
            if (data > p.data) {
                p = p.right;
            }
            else {
                p = p.left;
            }
            if (!p) {
                return;
            }
        }
        if (!p.left && p.right) {
            var minP = p.right;
            var minPP = p;
            while (minP.left != null) {
                minPP = minP;
                minPP = minP.left;
            }
            p.data = minP.data;
            p = minP;
            pp = minPP;
        }
        var child;
        if (p.left) {
            child = p.left;
        }
        else if (p.right) {
            child = p.right;
        }
        else {
            child = null;
        }
        if (!pp) {
            this.tree = child;
        }
        else if (pp.left == p) {
            pp.left = child;
        }
        else {
            pp.right = child;
        }
    };
    return Nodes;
}());
exports.Nodes = Nodes;
