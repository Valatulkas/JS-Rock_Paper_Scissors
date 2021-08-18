//Input # of games:
var numOfGames = prompt('RPS against the comp! \n One game or best of three?', '**ex: \'one\' or \'three\' only**');

//Set up Use and Computer choices:
var getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
    return userInput;
  } else {
    alert('Error: Please input valid RPS option');
  }
}
var getCompChoice = compChoice => {
  var randomNum = Math.floor(Math.random() * 3);
  switch (randomNum) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
}
//Single game option:
if (numOfGames === 'one') {
  var determineWinner = (userChoice, compChoice) => {
    if (userChoice === compChoice) {
      alert('Game is a tie! Please play again');
      console.log('Game is a tie!');
      return 'Tie game';
    }
    if (userChoice === 'rock') {
      if (compChoice === 'paper') {
        alert('The computer is the victor!');
        console.log('Comp is the victor');
        return 'Practice up';
      } else {
        alert('You are victorious!');
        console.log('You are the victor');
        return 'Congratulations';
      }
    }
    if (userChoice === 'paper') {
      if (compChoice === 'scissors') {
        alert('The computer is the victor!');
        console.log('Comp is the victor');
        return 'Practice up';
      } else {
        alert('You are victorious!');
        console.log('You are the victor');
        return 'Congratulations';
      }
    }
    if (userChoice === 'scissors') {
      if (compChoice === 'rock') {
        alert('The computer is the victor!');
        console.log('Comp is the victor');
        return 'Practice up';
      } else {
        alert('You are victorious');
        console.log('You are the victor');
        return 'Congratulations';
      }
    }
  }
  var playGame = () => {
    var userChoice = prompt('ROCK PAPER or SCISSORS?');
    var compChoice = getCompChoice();
    console.log('You threw ' + userChoice);
    console.log('Comp threw ' + compChoice);
    alert(determineWinner(userChoice, compChoice));
  }
  playGame();
}
//Best of three option:
if (numOfGames === 'three') {
  var userScore = 0;
  var compScore = 0;
  var determineWinner = (userChoice, compChoice) => {
    if (userChoice === compChoice) {
      console.log('Comp Score: ' + compScore, '\nUser Score: ' + userScore);
      console.log('Game is a tie! Please throw again');
      alert('Game is a tie! Please run program again');
      return 'Tie game';
    } else if (userChoice === 'rock') {
      if (compChoice === 'paper') {
        compScore++;
        console.log('Comp Score: ' + compScore, '\nUser Score: ' + userScore);
        return userScore, compScore;
      } else {
        userScore++;
        console.log('Comp Score: ' + compScore, '\nUser Score: ' + userScore);
        return userScore, compScore;
      }
    } else if (userChoice === 'paper') {
      if (compChoice === 'scissors') {
        compScore++;
        console.log('Comp Score: ' + compScore, '\nUser Score: ' + userScore);
        return userScore, compScore;
      } else {
        userScore++;
        console.log('Comp Score: ' + compScore, '\nUser Score: ' + userScore);
        return userScore, compScore;
      }
    } else if (userChoice === 'scissors') {
      if (compChoice === 'rock') {
        compScore++;
        console.log('Comp Score: ' + compScore, '\nUser Score: ' + userScore);
        return userScore, compScore;
      } else {
        userScore++;
        console.log('Comp Score: ' + compScore, '\nUser Score: ' + userScore);
        return userScore, compScore;
      }
    }
  }
  var playGame = () => {
    var userChoice = prompt('Throw ROCK PAPER or SCISSORS');
    var compChoice = getCompChoice();
    alert('You threw ' + userChoice + ' & your score is: ' + userScore + '\nComp threw ' + compChoice + ' & comp score is: ' + compScore); determineWinner(userChoice, compChoice);
    if (userScore === 2) {
      alert('You are victorious! Nice work');
      userScore = 0;
      compScore = 0;
    } else if (compScore === 2) {
      alert('Computer is victorious! Practice up');
      userScore = 0;
      compScore = 0;
    } else if (userScore < 2 || compScore < 2) {
      playGame();
    } 
  }
  playGame();
}