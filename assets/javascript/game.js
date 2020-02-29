//set up events, set variables, and then functions

var win;
var loss;



//between 19 and 120
var randomNumber= Math.floor(Math.random()* 100+20);

$("#randomNum").text("Random Number:" +randomNumber);


var counter = 0;

var numberOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var increment = numberOptions[Math.round(Math.random())];

$(".number").on("click", function() {
console.log($(this).val());
  
  counter += increment;

  $("#currentScore").text(counter);
  alert("New score: " + counter);

  if (counter === randomNumber) {
    wins++;
    $("#winsText").text("Wins:" + wins)
    alert("You win!");
  }

  else if (counter >= randomNumber) {
    
    alert("You lose!!");
  }

});

