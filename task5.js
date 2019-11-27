//5. A cashier has currency notes of denominations 10, 50 and 100. If the
//amount to be withdrawn is input through the keyboard in hundreds,
//find the total number of currency notes of each denomination the
//cashier will have to give to the withdrawer.
//You will have 4 hundred notes 1 fifty notes 2 ten notes.

var curr = Number(prompt("Enter amount to withdraw"));

  var notH = Math.floor(curr / 100);
  var notF = Math.floor((curr - (notH*100))/50);
  var notT = Math.round((curr - (notH*100)-(notF*50))/10);

alert("You will have "+notH+" hundred notes "+notF+" fifty notes "+notT+" tens notes");