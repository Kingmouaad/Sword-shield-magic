const Sword = document.querySelector("#Sword");
const Arrow = document.querySelector("#Arrow");
const Shield = document.querySelector("#Shield");
const allDivs = document.querySelectorAll("div");
let counttie = 0;
let countlose = 0;
let countwin = 0;

function getComputerChoice() {
  const choices = ["Sword", "Arrow", "Shield"];
  const random = Math.floor(Math.random() * 3);
  return choices[random];
}

function updateComputerDisplay(choice) {
  const divComputer = document.querySelector("#computer");
  const div1 = divComputer.querySelector('div[style="font-size: 3rem"]');
  const div2 = divComputer.querySelector("div.pirata-one-regular");
  if (div1 && div2) {
    if (choice === "Sword") {
      div2.textContent = "Sword";
      div1.textContent = "🗡️";
    } else if (choice === "Arrow") {
      div2.textContent = "Arrow";
      div1.textContent = "🏹";
    } else if (choice === "Shield") {
      div2.textContent = "Shield";
      div1.textContent = "🛡️";
    }
  }
}

function updateUserDisplay(choice) {
  const divUser = document.querySelector("#user");
  const div1 = divUser.querySelector('div[style="font-size: 3rem"]');
  const div2 = divUser.querySelector("div.pirata-one-regular");
  if (div1 && div2) {
    if (choice === "Sword") {
      div2.textContent = "Sword";
      div1.textContent = "🗡️";
    } else if (choice === "Arrow") {
      div2.textContent = "Arrow";
      div1.textContent = "🏹";
    } else if (choice === "Shield") {
      div2.textContent = "Shield";
      div1.textContent = "🛡️";
    }
  }
}

const win = document.querySelector("#win");
const lose = document.querySelector("#lose");
const tie = document.querySelector("#tie");

function determineWinner(userChoice, computerChoice) {
  const text = document.querySelector("#text");
  if (userChoice === computerChoice) {
    text.textContent = "⚖️ Draw! Both warriors are equally matched! ⚖️";
    counttie++;
    tie.textContent = `Your Ties ${counttie}`;
  } else if (
    (userChoice === "Sword" && computerChoice === "Arrow") ||
    (userChoice === "Shield" && computerChoice === "Sword") ||
    (userChoice === "Arrow" && computerChoice === "Shield")
  ) {
    text.textContent = "🎉 Victory! You win this battle! 🎉";
    countwin++;
    win.textContent = `Your Wins ${countwin}`;
  } else {
    text.textContent = "💀 Defeat! The computer wins! 💀";
    countlose++;
    lose.textContent = `Your Losses ${countlose}`;
  }
}
const kill = document.querySelector("#this");

// New game over and disable functions
function checkGameOver() {
  if (countwin >= 5) {
    alert("🏆 You reached 5 wins! Game over, you win!");
    disableGame();
  } else if (countlose >= 5) {
    alert("💀 Computer reached 5 wins! Game over, you lose!");
    disableGame();
  }
}

function disableGame() {
  [Sword, Arrow, Shield].forEach((btn) => {
    btn.disabled = true;
  });
  // Optionally, show a restart button or message here
}

// Attach click handlers
[Sword, Arrow, Shield].forEach((btn) => {
  btn.addEventListener("click", function () {
    let userChoice = btn.id.trim();
    updateUserDisplay(userChoice);
    let computerChoice = getComputerChoice();
    updateComputerDisplay(computerChoice);
    kill.style.visibility = "visible";
    determineWinner(userChoice, computerChoice);
    checkGameOver();
  });
});
