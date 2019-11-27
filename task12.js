//12. Write a JavaScript program act as number guessing game and
//give user chance to try 3 times if guess incorrect and then ask user if
//he/she wants to play game again
//a. Generate Random number between 1 to 100
//b. Ask user to guess number
//c. User will have 3 chances, if user enters incorrect number it
//should say that “Incorrect, Please try again”
//d. If user guess right on first, second or third try is should say “You
//are right, You won”
//e. Then it asks the user if he/she wants to play again, if user says
//yes, then the whole process starts from point (a) again
//f. If user says no then game end saying “Thank you for playing
//with use today”
//g. After point ( c ) if user failed 3 times then it should say “You
//Lose” and game should ask if user wants to play again, if user
//say yes then it should start from point (a) again.
//Note: You must use while or do while loop and functions for this



var rand = Math.round(Math.random()*100);

guess(rand);

function guess(r) {
var count = 1;
  while (count < 4 ) {
     var num = Number(prompt("Guess number!"));
      if (num === r) {
        alert("You are right, You won");
        break;
      }
      else if ( count == 3) {
         alert("You Lose");
         break;
      }
     alert("Incorrect, Please try again");
     count++;
  }
 var game = prompt("Do you want to play again.\n Enter Yes or No");
   if (game.toLowerCase() == "yes") {
   guess();
   }
   else {
   alert("Thank you for playing with use today");
   }
}
        
