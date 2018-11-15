'use strict';

console.time('division');

const x = 2;
const y = 3;
const result = x/y;

if ( result ==  1.5 ) {
    console.log(`✅ Result: ${result}`);
} else {
    console.error('❌ Error: Operands wrong positioned!');
}

console.timeEnd('division');