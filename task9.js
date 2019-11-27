//9. Write a function to add weeks in current date

var week = Number(prompt("Enter number of weeks to add"));

function addweek(wk) {
 wk = new Date(new Date().getTime()+(wk*7*24*60*60*1000));
 return wk;
}

alert(addweek(week));
