
const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (
    userInput === "rock" ||
    userInput === "scissors" ||
    userInput === "paper" ||
    userInput === 'bomb'
  ) {
    return userInput;
  } else {
    console.log("Error");
  }
};
const getComputerChoice = function () {
  let randomNum = Math.floor(Math.random() * 3);
  if (randomNum === 0) {
    return "rock";
  }
  if (randomNum === 1) {
    return "paper";
  }
  if (randomNum === 2) {
    return "scissors";
  }
};
const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "Tied";
  }
  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "you loose!";
    } else {
      return "you win!";
    }
  }
  if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "you loose!";
    } else {
      return "you win!";
    }
  }
  if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return "you loose!";
    } else {
      return "you win!";
    }
  }
   if (userChoice === "bomb") {
      return "you win";
    }
};
function playGame() {
  const userChoice = getUserChoice("paper");
  const computerChoice = getComputerChoice();
  console.log("You threw: " + userChoice);
  console.log("computer threw: " + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
}
playGame()


confirm ("Would you like to play a game??")
  let (confirm(text) == true)

alert("Would you like to play a game??!!");