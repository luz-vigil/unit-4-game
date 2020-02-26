//set up events, set variables, and then functions

var win;
var loss;



//between 19 and 120
var randomNumber= i



$("#number-to-guess").text(randomNumber);

var counter = 0;


var numberOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var increment = numberOptions[Math.round(Math.random())];

$(".crystal-image").on("click", function() {

  
  counter += increment;

  alert("New score: " + counter);

  if (counter === targetNumber) {
    alert("You win!");
  }

  else if (counter >= targetNumber) {
    alert("You lose!!");
  }

});

