$(document).ready(function(){

	// Declaring all my variables
	var random = 0;
	var wins = 0;
	var losses = 0;
	var totalScore = 0;
	var python_lan = 0;
	var java_lan = 0;
	var php_lan = 0;
	var ruby_lan = 0;

	// Function resets game and grabs all random values everytime game is reset
	function restartGame(){
		random = Math.floor(Math.random() * 101) + 19;
		python_lan = Math.floor(Math.random() * 12) + 1;
		java_lan = Math.floor(Math.random() * 12) + 1;
		php_lan = Math.floor(Math.random() * 12) + 1;
		ruby_lan = Math.floor(Math.random() * 12) + 1;
		totalScore = 0;
	}

	// Gets called within the changeTotalScore function in order for this function to update the values of wins losses and total score
	function updateScoreCard(){

		$('#totalScore').html(totalScore);
		$('#numofWins').html(wins);
		$('#numofLosses').html(losses);
		$('#randomNumber').html(random);

	}

	// Logic 
	function changeTotalScore(toAdd){
		totalScore += toAdd;

		if(totalScore > random){
			losses += 1;
			restartGame();
		} else if (totalScore == random){
			wins += 1;
			restartGame();
		} else{
		}
		updateScoreCard();
	}
	updateScoreCard();
	restartGame();
	
	// on clicks for random values when the programming languages are clicked
	// ruby on click
	$("#ruby").on( "click", function() {
		changeTotalScore(ruby_lan);
 	});
	// php on click
 	$("#php").on( "click", function() {
		changeTotalScore(php_lan);
 	});
 	// java on click
 	$("#java").on( "click", function() {
		changeTotalScore(java_lan);
 	});
 	// python on click
	$("#python").on( "click", function() {
		changeTotalScore(python_lan);
 	});

})