import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';
import isSatSun from './practice12a.js';

const today = dayjs();
const date = today.add(3, 'days');
const date2 = today.add(1, 'months');
const date3 = today.subtract(1, 'month');
console.log(date.format('MMMM D'));
console.log(date2.format('MMMM D'));
console.log(date3.format('MMMM D'));
console.log(date2.format('dddd'));

console.log(isSatSun(date));
