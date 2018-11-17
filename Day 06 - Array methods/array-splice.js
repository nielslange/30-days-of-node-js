'use strict';

let cats = ['Liki', 'Flexo'];
console.log(cats);

cats.splice(1, 0, 'Kilang');
console.log(cats);

cats.splice(2, 0, 'Berry');
console.log(cats);

cats.splice(2, 1, 'Marry');
console.log(cats);

cats.splice(2, 1);
console.log(cats);