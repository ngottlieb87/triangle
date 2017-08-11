$(document).ready(function (){
var side1 = prompt("Whats the first length?");
var side2 = prompt("Whats the second length?");
var side3 =  prompt("Whats the third length?");
  if ((side1 + side2) <= side3){
   alert("not a triangle");
   return;
 };
  if(side1 === side2 && side1 === side3){
    alert("Equilateral");
  } else if(side1 === side2 && side1!==side3 || side2 === side3 && side2 !== side1 || side3 === side1 && side2 !== side3){
    alert("isosceles");
  } else if(side1 !== side2 && side2 !== side3){
    alert("scalene");
  }
});
