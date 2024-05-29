"use strict";
//baisc Array syntax
let myName1 = [1, 'Ahmed', 2, 'moiz', 3, 'ashar', 4, 'sammer'];
console.log(myName1);
myName1.forEach(function (e, i, a) {
    console.log(e);
});
let filtArr = myName1.filter(function (e, i, a) {
    return typeof e === "number";
});
console.log(filtArr);
