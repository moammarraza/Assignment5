//6. Write a function that will take an array and generate a mirror array of it.

var array = [];
var len = Number(prompt("Enter array length"));

for (var i = 0; i < len; i++) {
  array.push(Number(prompt("Enter number "+(i+1))));
}

function mirror(arr) {
  for (var i = arr.length-1 ; i >= 0; i--) {
    arr.push(arr[i]);
  } 
  return arr;
}


document.write("mirror(["+array+"]) = ["+mirror(array)+"]");