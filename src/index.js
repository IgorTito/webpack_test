console.log("ES6")
import './style.css';
// index.js
import  * as math from './math.js';

const multiply = (a) => a * 8;

console.log( math.sum(1,2) );

console.log( math.multiply(5))

console.log("multiply =" + multiply(8))