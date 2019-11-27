//4. The Geometrizer
//Create 2 functions that calculate properties of a circle, using the definitions here.
//Create a function called calcCircumference:
//a. Pass the radius to the function.
//b. Calculate the circumference based on the radius, and output
//"The circumference is NN".
//Create a function called calcArea:
//a. Pass the radius to the function.
//b. Calculate the area based on the radius, and output "The area is NN".
//Circumference of circle = 2πr
//Area of circle = πr2

var radius = Number(prompt("Enter radius"));
var pie = 3.141592;

document.write("The circumference is "+calcCircumference(pie, radius)+"<br>"+"The area is "+calcArea(pie, radius));

function calcCircumference(p, rad) {
  circum = 2 * p * rad;
  return circum;
}

function calcArea(p, rad) {
  pie = 3.141592;
  area = pie * (rad * rad);
  return area;
}