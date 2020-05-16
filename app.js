//1a. select all divs and turn into an array (named cells) with 9 total indexes
let cells = document.querySelectorAll(".row > div");
//1b. for each individual index (named square), run function when clicked
for (let square of cells) {
  square.addEventListener("click", cellClicked);
}
//set a conditon that if true, a function will run to clear square contents
let gameOver = false;
//define player as string 'X', so when context is shown on click, it shows an 'X'
let player = "X";
//select div id='whoWon' to allow winner's name to show
let announcement = document.querySelector("#whoWon");
//Selects div with button ID "newGame"
//select html button id= 'newGame'
let newGame = document.querySelector("#newGame");
//on click of newGame button, run function
newGame.addEventListener("click", clearBoard)


//FUNCTIONS

function choosePlayer() {
  //set to return nothing if cell is already clicked
  if (event.target.textContent === 'X' || event.target.textContent === 'O') {
    return;
  }
  event.target.textContent = player;
  if (player === "X") {
    player = "O";
  } else {
    player = "X";
  }
  
}

function cellClicked() {
 choosePlayer();
  checkWinner();
}

function clearBoard() {
  if (gameOver) {    
    for (let squares of cells){
      squares.textContent = ""; 
      announcement.textContent = ""
    }
  }
}

function checkWinner() {
    if (
    (cells[0].textContent == "X" &&
      cells[1].textContent == "X" &&
      cells[2].textContent == "X") ||
    (cells[3].textContent == "X" &&
      cells[4].textContent == "X" &&
      cells[5].textContent == "X") ||
    (cells[6].textContent == "X" &&
      cells[7].textContent == "X" &&
      cells[8].textContent == "X") ||
    (cells[0].textContent == "X" &&
      cells[3].textContent == "X" &&
      cells[6].textContent == "X") ||
    (cells[1].textContent == "X" &&
      cells[4].textContent == "X" &&
      cells[7].textContent == "X") ||
    (cells[2].textContent == "X" &&
      cells[5].textContent == "X" &&
      cells[8].textContent == "X") ||
    (cells[0].textContent == "X" &&
      cells[4].textContent == "X" &&
      cells[8].textContent == "X") ||
    (cells[2].textContent == "X" &&
      cells[4].textContent == "X" &&
      cells[6].textContent == "X")
  ) {
    console.log("X WINS!");
    announcement.textContent = "X Wins!";
    gameOver = true;
    player = "X";
  } else if (
    (cells[0].textContent == "O" &&
      cells[1].textContent == "O" &&
      cells[2].textContent == "O") ||
    (cells[3].textContent == "O" &&
      cells[4].textContent == "O" &&
      cells[5].textContent == "O") ||
    (cells[6].textContent == "O" &&
      cells[7].textContent == "O" &&
      cells[8].textContent == "O") ||
    (cells[0].textContent == "O" &&
      cells[3].textContent == "O" &&
      cells[6].textContent == "O") ||
    (cells[1].textContent == "O" &&
      cells[4].textContent == "O" &&
      cells[7].textContent == "O") ||
    (cells[2].textContent == "O" &&
      cells[5].textContent == "O" &&
      cells[8].textContent == "O") ||
    (cells[0].textContent == "O" &&
      cells[4].textContent == "O" &&
      cells[8].textContent == "O") ||
    (cells[2].textContent == "O" &&
      cells[4].textContent == "O" &&
      cells[6].textContent == "O")
  ) {
    console.log("O WINS!");
    announcement.textContent = "O Wins!";
    gameOver = true;
    player = "X";
    } else if (
    cells[0].textContent !== "" &&
    cells[1].textContent !== "" &&
    cells[2].textContent !== "" &&
    cells[3].textContent !== "" &&
    cells[4].textContent !== "" &&
    cells[5].textContent !== "" &&
    cells[7].textContent !== "" &&
    cells[7].textContent !== "" &&
    cells[8].textContent !== ""
  ) {
    announcement.textContent = "DRAW!";
    gameOver = true;
    player = "X";
  }
}
