//3. Write a JavaScript function that checks whether a passed string is a
//palindrome or not? A palindrome is the word, phrase, or sequence
//that reads the same backward as forward, e.g., madam, Tibit.


var word = prompt("Enter word");

alert("The word "+word+" is "+pal(word));

function pal(w) {
  var p = "";
  for (var i = w.length-1; i >=0; i--) {
    p = p+w[i];
  }
  if ( p === w) {
    return "a palindrome";
  }
  else {
    return "NOT a palindrome";
  }
}