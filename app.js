"use strict";
function summ(a) {
    var sum = 0;
    var x = Object.keys(a).map(function (k) {
        var elem = a[k];
        console.log(elem.cvalue);
        if (typeof elem.cvalue === "number") {
            sum += elem.cvalue;
        }
        ;
        if (typeof elem.cvalue === 'string') {
            if (isNaN(+elem.cvalue)) {
                sum += 2021;
            }
            else {
                sum += +elem.cvalue;
            }
        }
        ; // || '2021'
        if (typeof elem.cvalue === 'object') {
            sum += 1;
        }
        ;
        if (typeof elem.cvalue === 'undefined') {
            sum += 2021;
        }
        ;
    });
    console.log(sum);
    // console.log(x);
    // for (let i = 0; i < x.lenght; i++) {
    //   sum += x[i].cvalue;
    // }
    // console.log(sum);
    // return summ;
}
var obj = {
    hello: { cvalue: 1 },
    u: { undefined: undefined },
    hi: { cvalue: '10' },
    world: { cvalue: { yay: { cvalue: '2' } } }
};
summ(obj);
