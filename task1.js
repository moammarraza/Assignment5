//1. Write a function that computes the factorial of a number

var number = Number(prompt("Enter a number"));

alert("Factorial of "+number+" is "+fact(number));

function fact(num) {
 var val = 1;
 for (var i = num; i > 0; i--) {
 val = i*val;
 }
 return val;
}



