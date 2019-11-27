//10. Write a JavaScript function that accept string and returns the count
//of vowel used within the string.

var str = prompt("enter a phrase");

var vow = ['a','e','i','o','u'];
var wel = [];

vowel(vow, wel);

function vowel(vow, wel) {
  var count = 0;
  for (var i = 0; i < vow.length; i++) {
    for (j = 0; j < str.length; j++) {
      if (str[j] === vow[i]) {
        count++;  
      }
    }
    wel.push(count);
    count = 0;
    document.write(vow[i]+" = "+wel[i]+"<br>");
  }
} 