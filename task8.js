//8. Write a function that take birth date and returns Age in years, months
//and days

var d1 = new Date(prompt("mm/dd/yyy"));
var d2 = new Date();


function calculateAge() {
  if ( d1 > d2 ) {
  return "Please enter correct DoB";
  }
  var d3= d2.getFullYear() - d1.getFullYear();
  var d4 = new Date(d1.setFullYear(d2.getFullYear()));
  var d5 = (Date.now() - d4.getTime())/(1000*60*60*24*30.42)
  var d6 = Math.floor(d5);
  var d7 = Math.floor((d5 - d6)*30.42)
  var d8 = d2.getMonth() - d4.getMonth();

  if (d4 < d2) {
    return '"You are '+ d3 +" years, " + d6+" months and "+d7+' days old"';
  }
  else if (d2 < d4) {
    return '"You are '+Number(d3-1)+" years, "+ (12+d6)+" months and "+ d7+' days old"';
  }
}


document.write("calculateAge('"+d1.toDateString()+"') = "+calculateAge(d1, d2));
