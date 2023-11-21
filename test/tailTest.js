const tail = require('../tail');
const assertEqual = require('../assertEqual');


const test1 = ["Yo Yo", "Lighthouse", "Labs"];
tail(test1);
assertEqual(test1.length, 3);

const test2 = [];
tail(test2);
assertEqual(test2.length, 0);