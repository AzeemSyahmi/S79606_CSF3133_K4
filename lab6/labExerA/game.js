let gameStarted = false;                
let wins = 0, losses = 0, draws = 0;     
let results = [];                         

// Header row of the history table 
const historyHeader = "<tr><th>Round</th><th>You</th><th>Computer</th><th>Result</th></tr>";

// ===== startGame() =====
function startGame() {
  let name = document.getElementById("playerName").value.trim(); 
  if (name === "") {                                           
    alert("Please enter your name.");
    return;                                                     
  }
  gameStarted = true;
  document.getElementById("welcome").innerHTML = "Welcome, " + name + "!";
  document.getElementById("startTime").innerHTML = "Game started: " + Date();
}

// ===== getComputerChoice() =====
function getComputerChoice() {
  let options = ["rock", "paper", "scissors"];
  let index = Math.floor(Math.random() * 3);   // random integer 0, 1 or 2
  return options[index];
}

// ===== playRound() =====
function playRound(playerChoice) {
  if (!gameStarted) {                          
    alert("Click Start Game first.");
    return;
  }

  let computerChoice = getComputerChoice();
  let outcome;                                 

  if (playerChoice === computerChoice) {
    outcome = "Draw";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "scissors" && computerChoice === "paper") ||
    (playerChoice === "paper" && computerChoice === "rock")
  ) {
    outcome = "Win";
  } else {
    outcome = "Lose";
  }

  document.getElementById("playerImg").src = playerChoice + ".png";
  document.getElementById("computerImg").src = computerChoice + ".png";


  let resultEl = document.getElementById("result");
  if (outcome === "Win") {
    resultEl.innerHTML = "You win!";
    resultEl.style.color = "green";
    wins++;
  } else if (outcome === "Lose") {
    resultEl.innerHTML = "You lose!";
    resultEl.style.color = "red";
    losses++;
  } else {
    resultEl.innerHTML = "It's a draw!";
    resultEl.style.color = "grey";
    draws++;
  }

  // Update the scoreboard
  document.getElementById("wins").innerHTML = wins;
  document.getElementById("losses").innerHTML = losses;
  document.getElementById("draws").innerHTML = draws;

  // Store the result and add a new row to the history table
  results.push(outcome);
  document.getElementById("history").innerHTML +=
    "<tr><td>" + results.length + "</td><td>" + playerChoice +
    "</td><td>" + computerChoice + "</td><td>" + outcome + "</td></tr>";
}

// ===== showSummary() =====
function showSummary() {
  let total = results.length;
  if (total === 0) {
    document.getElementById("summary").innerHTML = "No rounds played yet.";
    return;
  }
  let winCount = 0;
  for (let i = 0; i < results.length; i++) {   
    if (results[i] === "Win") {
      winCount++;
    }
  }
  let percentage = Math.round((winCount / total) * 100);   // rounded win %
  document.getElementById("summary").innerHTML =
    "You played " + total + " rounds and won " + percentage + "%";
}

// ===== resetGame() =====
function resetGame() {
  gameStarted = false;                                       
  wins = 0; losses = 0; draws = 0;
  results = [];                                              
  document.getElementById("wins").innerHTML = 0;
  document.getElementById("losses").innerHTML = 0;
  document.getElementById("draws").innerHTML = 0;
  document.getElementById("history").innerHTML = historyHeader; 
  document.getElementById("result").innerHTML = "";
  document.getElementById("summary").innerHTML = "";
  document.getElementById("playerName").value = "";          
  document.getElementById("welcome").innerHTML = "";        
  document.getElementById("startTime").innerHTML = "";       
  document.getElementById("playerImg").src = "rock.png";
  document.getElementById("computerImg").src = "rock.png";
}
