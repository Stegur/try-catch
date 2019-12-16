/* eslint-disable no-console */
import counter from './counter';

console.log(counter('10'));
console.log(counter('15 штук'));
console.log(counter('some'));

console.log(counter('0b00000000011111111111111111111111'));
console.log(counter('0755'));
console.log(counter('0855'));
console.log(counter('0x123456789ABCDEF'));
