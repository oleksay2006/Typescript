"use strict";

function summ(a) {
    type BigObject = {
      [a: string]: { value: number | string | undefined | BigObject } | undefined;
    }
    let sum = 0;
    const x = Object.keys(a).map((k) => {
      
      const elem = a[k];
      console.log(elem.cvalue);
      if (typeof elem.cvalue === "number") {sum += elem.cvalue;};
      if (typeof elem.cvalue === 'string') {if (isNaN(+elem.cvalue)){sum += 2021;} else {sum += +elem.cvalue}}; // || '2021'
      if (typeof elem.cvalue === 'object') {sum += 1;};
      if (typeof elem.cvalue === 'undefined') {sum += 2021;};
      
    });
    console.log(sum);
    // console.log(x);
    
    // for (let i = 0; i < x.lenght; i++) {
    //   sum += x[i].cvalue;
    // }
    // console.log(sum);
    // return summ;
  }
  const obj = {
    hello: { cvalue: 1 },
    u: {undefined},
    hi: {cvalue: '10'},
    world: { cvalue: { yay: { cvalue: '2' } } },
  };
  summ(obj);
  