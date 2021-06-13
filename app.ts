"use strict";
import { is } from 'typescript-is';
function summ(a) {
    interface BigObject {
      [a: string]: { value: number | string | undefined | BigObject } | undefined;
    }
    let sum = 0;
    const x = Object.keys(a).map((k) => {
      
      const elem = a[k];
      console.log(elem);
      if (typeof elem.cvalue === "number") {sum += 1;};
      if (typeof elem.cvalue === 'string') {sum += 1;}; // || '2021'
      if (is<BigObject>(elem)) {sum += 1};
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
    hi: {cvalue: 'Hello world'},
    world: { cvalue: { yay: { cvalue: '2' } } },
  };
  summ(obj);
  