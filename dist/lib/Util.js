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
    return Util;
}());
exports.Util = Util;
