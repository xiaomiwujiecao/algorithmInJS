"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Util = /** @class */ (function () {
    function Util() {
    }
    /**
     * @bignumber   {math.js bignumber }
     * */
    Util.transBigNumber = function (bignumber) {
        return Number(bignumber.toString());
    };
    Util.url2json = function () {
        var url = arguments[0] || window.location.href;
        var index = -1;
        var str = '';
        var arr = [];
        var length = 0;
        var res = {};
        if (url.indexOf('?') != -1) {
            index = url.indexOf('?');
            str = url.substring(index + 1);
            arr = str.split('&');
            for (var i = 0; i < arr.length; i++) {
                var index_1 = decodeURIComponent(arr[i].split('=')[0]);
                res[index_1] = decodeURIComponent(arr[i].split('=')[1]);
            }
        }
        else {
            res = {};
        }
        return res;
    };
    Util.json2url = function (obj) {
        if (obj) {
            return Object.keys(obj).map(function (key) {
                return encodeURIComponent(key) + "=" + encodeURIComponent(obj[key]);
            }).join("&");
        }
        else {
            return "";
        }
    };
    return Util;
}());
exports.Util = Util;
