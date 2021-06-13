// function summ(a) {
//   const x = Object.keys(a).map((k) => {
//     const elem = a[k];
//     if (typeof elem === undefined) return 2021;
//     if (typeof elem.cvalue === 'String') return +elem.cvalue; // || '2021'
//     if (elem.cvalue.isBigObject !== undefined) return summ(elem);
//     return elem.сvalue;
//   });
//   console.log(x);
//   let sum = 0;
//   for (let i = 0; i < x.lenght; i++) {
//     sum += x[i].cvalue;
//   }
//   console.log(sum);
//   return summ;
// }
// const obj = {
//   hello: { cvalue: 1 },
//   world: { cvalue: { yay: { cvalue: '2' } } },
// };
// summ(obj);
