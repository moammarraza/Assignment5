//2. Write a function that calculates the area of a rectangle.

//A = width * height
//Pass width and height in following manner:
//i. Arguments as value
//ii. Arguments as variables

var width = Number(prompt("Enter width, height is 5"));

alert("Area of the rectangle is "+area(width, 5));

function area(w, h) {
 a = w * h;
 return a;
}
