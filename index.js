let playerOneWinningCount = 0;
let playerTwoWinningCount = 0;
let count = 1;
function twoPlayer() {
     let isTrue = true;
     let playerOneWealth = 100;
     let playerTwoWealth = 100;
     let playerOneShoot, playerTwoShoot;
     while (isTrue) {
          playerOneShoot = Math.floor(Math.random() * 6);
          playerTwoWealth -= playerOneShoot;
          playerTwoShoot = Math.floor(Math.random() * 6);
          playerOneWealth -= playerTwoShoot;
          if (playerOneWealth <= 0) {
               playerTwoWinningCount++;
               isTrue = false;
          }
          else if (playerTwoWealth <= 0) {
               playerOneWinningCount++;
               isTrue = false;
          }
     }
     document.getElementById('gameCount').innerHTML = `<h2>Game ${count} :-</h2>`;
     document.getElementById('player1').innerHTML = `Player 1 - Won: ${playerOneWinningCount}`;
     document.getElementById('player2').innerHTML = `Player 2 - Won: ${playerTwoWinningCount}`;
     if (playerOneWinningCount === 3) {
          document.getElementById("result").innerHTML = "Player 1 Won the Match!!!";
          document.getElementById('play').setAttribute("disabled", "");
     }
     if (playerTwoWinningCount === 3) {
          document.getElementById("result").innerHTML = "Player 2 Won the Match!!!";
          document.getElementById('play').setAttribute("disabled", "");
     }
     if (count === 6) {
          document.getElementById('play').setAttribute("disabled", "");
     }
     count++;
}