'use strict';
function summ(a) {
    interface BigObject {
      [a: string]: { value: number | string | undefined | BigObject } | undefined;
    }
    let sum = 0;
    const x = Object.keys(a).map((k) => {
      const elem = a[k];
      // console.log(elem.cvalue);
      if (typeof elem.cvalue === "number") {sum += 1;};
      if (typeof elem.cvalue === 'string') {sum += 1;}; // || '2021'
      if (elem.type === 'BigObject') {sum += 1};
      //   return elem.сvalue;
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
    world: { cvalue: { yay: { cvalue: '2' } } },
  };
  summ(obj);
  