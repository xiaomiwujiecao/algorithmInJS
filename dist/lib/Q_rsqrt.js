function Q_rsort(numberObject) {
    var i;
    var x2;
    var y;
    var threehalfs = 1.5;
    x2 = numberObject * .5;
    y = numberObject;
    i = y;
    i = 0x5f3759df - (i >> 1);
    y = y * (threehalfs - x2 * y ^ 2);
    return y;
}
var res = Q_rsort(3);
console.log(res);
