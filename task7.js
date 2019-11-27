//7. Write a function to test whether a given date is a weekend? If not how
//many days to weekend

var date = new Date(prompt("mm/dd/yyyy"));

function day(d) {
 d = d.getDay();
 if (d == 0 || d == 6) {
  d = '"Its Weekend"'; 
  return d;
  }
  else {
  d = '"Sorry! wait for '+ Number(6 - d) + ' more day/s"';
  return d;
  }
}
alert("is Weekend('"+date.toDateString()+"') = "+day(date));