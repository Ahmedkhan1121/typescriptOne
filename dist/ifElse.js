"use strict";
//  const isCarPuncher: string ="no"
//  if(isCarPuncher === "yes"){
//     console.log('i will be late for class');
//  }else{
//     console.log('i will be on time');
//  }
//elseif
const isRainig = false;
const isTherePostFromDaniyal = true;
if (isRainig && isTherePostFromDaniyal) {
    console.log('there is no class line on 15');
}
else if (isTherePostFromDaniyal) {
    console.log('there is no class line on 18');
}
else {
    console.log("there is class");
}
console.log("------");
// let day ='mOndaY'
// if(day.toLowerCase()==="monday"){
//     console.log("there is my class");
// }else if(day.toLowerCase()==="tuesday"){
//     console.log("there is sammer class");
// }
// else if(day.toLowerCase()==="wednesday"){
//     console.log("there is isfhan class");
// }
// else if(day.toLowerCase()==="thurday"){
//     console.log("there is shahzaib class");
// }
// else if(day.toLowerCase()==="friday"){
//     console.log("there is shan class");
// }
// else if(day.toLowerCase()==="saturday"){
//     console.log("there is ashar class");
// }
// else if(day.toLowerCase()==="sunday"){
//     console.log("there is zain class");
// }
// else{
//     console.log('there is no class');
// }
var percentage = 1000;
if (percentage >= 80 && percentage <= 100) {
    console.log('A+');
}
else if (percentage >= 70 && percentage < 80) {
    console.log('A');
}
else if (percentage >= 60 && percentage < 70) {
    console.log('B');
}
else if (percentage >= 50 && percentage < 60) {
    console.log('C');
}
else if (percentage >= 40 && percentage < 50) {
    console.log("D");
}
else if (percentage >= 33 && percentage < 40) {
    console.log('E');
}
else if (percentage < 33) {
    console.log('fail');
}
else {
    console.log('invalid grade');
}
let isEven = 4686;
if (isEven % 2 === 0) {
    console.log("even");
}
else {
    console.log('odd');
}
