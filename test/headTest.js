const head = require('../head');
const assertEqual = require('../assertEqual');

assertEqual(head([6,6,7]), 6);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");