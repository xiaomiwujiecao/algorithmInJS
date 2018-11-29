"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const async = require("async");
const Q = require("q");
class SyncPromise {
    constructor(arrayOfCallback) {
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
    seriesOfArray(arrayOfCallback) {
        const deferred = Q.defer();
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
    }
    seriesOfObject(arrayOfCallback) {
        const deferred = Q.defer();
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
    }
}
exports.SyncPromise = SyncPromise;
