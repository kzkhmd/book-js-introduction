// import { getTriangleArea, Member } from "./util.js";
import * as util from './util.js';
import Area from './area.js';
import { VERSION as VER } from './area.js';


console.log(util.getTriangleArea(10, 2));

let member = new util.Member('Ryota');
console.log(member.greet());

console.log(VER);
console.log(Area.circle(5));

import('./util.js').then(module => {
    console.log(module.getTriangleArea(10, 2));
    let member = new module.Member('Ryota');
    console.log(member.greet());
});

import './run.js';
console.log('module loaded');
