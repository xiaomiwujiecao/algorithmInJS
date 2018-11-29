"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var async = require('async');
var Q = require('q');
var SyncPromise = /** @class */ (function () {
    function SyncPromise(arrayOfCallback) {
        this.arrayOfCallback = arrayOfCallback;
    }
    /*
    var self = this
    var arrayOfCallback = ids.map(id => {
                return self.method(id)
            })
    method(option){
        return (callback)=>{
            slef.othermethod(option).then(data=>{
                callback(null,data)
            })
        }
    }*/
    SyncPromise.prototype.seriesOfArray = function (arrayOfCallback) {
        var deferred = Q.defer();
        async.series(arrayOfCallback, function (err, results) {
            if (err) {
                deferred.reject(err);
                return;
            }
            if (results) {
                deferred.resolve(results);
            }
        });
        return deferred.promise;
    };
    SyncPromise.prototype.seriesOfObject = function (arrayOfCallback) {
        var deferred = Q.defer();
        async.series(arrayOfCallback, function (err, results) {
            if (err) {
                deferred.reject(err);
                return;
            }
            if (results) {
                deferred.resolve(results);
            }
        });
        return deferred.promise;
    };
    return SyncPromise;
}());
exports.SyncPromise = SyncPromise;
