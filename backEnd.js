const express = require('express');
//const axios = require('axios').default;

const app = express();
app.use(express.json());
app.use(express.static('.'));
// Creates roots to send html files

let gameState = {
  numRows: 6, // used to generate the cells and circles of the board
  numColumns: 7,
  isBlue: true,
  squareColor: 'blue',
  currentRow: 6,
  currentColumn: 0,
  col0Row: 6,
  col1Row: 6,
  col2Row: 6,
  col3Row: 6,
  col4Row: 6,
  col5Row: 6,
  col6Row: 6,
  color: 'yellow',
  win: false,
  boardArray: [
    [null, null, null, null, null, null, null], // column 0 is kept empty
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null]], // column 7 is kept empty
  turn: 0,
  redScore: 0,
  yellowScore: 0,
};

function changeColor(gameState) {
  if (gameState.currentRow >= 0) {
    if (gameState.color === 'red') {
      gameState.color = 'yellow';
    } else {
      gameState.color = 'red';
    }
  }
  return gameState.color;
}

function buttonPressedLog(gameState) {
  console.log('buttonPressedLog,');

  if (!gameState.win) {
    if (gameState.currentColumn === 0) {
      gameState.currentRow = gameState.col0Row;
      gameState.col0Row--;
    }
    if (gameState.currentColumn === 1) {
      gameState.currentRow = gameState.col1Row;
      gameState.col1Row--;
    }
    if (gameState.currentColumn === 2) {
      gameState.currentRow = gameState.col2Row;
      gameState.col2Row--;
    }
    if (gameState.currentColumn === 3) {
      gameState.currentRow = gameState.col3Row;
      gameState.col3Row--;
    }
    if (gameState.currentColumn === 4) {
      gameState.currentRow = gameState.col4Row;
      gameState.col4Row--;
    }
    if (gameState.currentColumn === 5) {
      gameState.currentRow = gameState.col5Row;
      gameState.col5Row--;
    }
    if (gameState.currentColumn === 6) {
      gameState.currentRow = gameState.col6Row;
      gameState.col6Row--;
    }
    // console.log(gameState);
    if (gameState.currentRow >= 1) {
      gameState.color = changeColor(gameState);
      gameState.boardArray[gameState.currentRow][gameState.currentColumn] = gameState.color;
      // console.log(gameState.boardArray[gameState.currentRow][gameState.currentColumn]);
      checkWin(gameState);
      gameState.turn++;
    }
    if (gameState.turn >= 42) {
      console.log("it's a draw");
    }
  }
  // console.log(gameState.color);
  return gameState;
}

function checkWin(gameState) {
  verticalWin(gameState);
  horizontalWin(gameState);
  diagonalWin(gameState);
  if (gameState.win) {
    winnerWinner(gameState);
  }
}

function verticalWin(state) {
  const {
    currentRow,
    currentColumn,
    boardArray,
  } = state;
  if ((boardArray[currentRow][currentColumn] === boardArray[currentRow + 1][currentColumn]
      && boardArray[currentRow][currentColumn] === boardArray[currentRow + 2][currentColumn]
      && boardArray[currentRow][currentColumn] === boardArray[currentRow + 3][currentColumn])) {
    state.win = true;
    console.log(gameState.win, 'vertical');
  }
  return gameState;
}

function horizontalWin(state) {
  const {
    currentRow,
    currentColumn,
    boardArray,
  } = state;
  if ((boardArray[currentRow][currentColumn] === boardArray[currentRow][currentColumn + 1]
    && boardArray[currentRow][currentColumn] === boardArray[currentRow][currentColumn + 2]
    && boardArray[currentRow][currentColumn] === boardArray[currentRow][currentColumn + 3])
    || (boardArray[currentRow][currentColumn] === boardArray[currentRow][currentColumn - 1]
      && boardArray[currentRow][currentColumn] === boardArray[currentRow][currentColumn - 2]
      && boardArray[currentRow][currentColumn] === boardArray[currentRow][currentColumn - 3])
    || (boardArray[currentRow][currentColumn] === boardArray[currentRow][currentColumn - 1]
      && boardArray[currentRow][currentColumn] === boardArray[currentRow][currentColumn - 2]
      && boardArray[currentRow][currentColumn] === boardArray[currentRow][currentColumn + 1])
    || (boardArray[currentRow][currentColumn] === boardArray[currentRow][currentColumn + 1]
      && boardArray[currentRow][currentColumn] === boardArray[currentRow][currentColumn + 2]
      && boardArray[currentRow][currentColumn] === boardArray[currentRow][currentColumn - 1])) {
    state.win = true;
    console.log(gameState.win, 'horizontal');
  }
  return gameState;
}

function diagonalWin(state) {
  const {
    currentRow,
    currentColumn,
    boardArray,
  } = state;
  if ((boardArray[currentRow][currentColumn] === boardArray[currentRow + 1][currentColumn + 1]
    && boardArray[currentRow][currentColumn] === boardArray[currentRow + 2][currentColumn + 2]
    && boardArray[currentRow][currentColumn] === boardArray[currentRow + 3][currentColumn + 3])
    || (boardArray[currentRow][currentColumn] === boardArray[currentRow - 1][currentColumn - 1]
      && boardArray[currentRow][currentColumn] === boardArray[currentRow - 2][currentColumn - 2]
      && boardArray[currentRow][currentColumn] === boardArray[currentRow - 3][currentColumn - 3])
    || (boardArray[currentRow][currentColumn] === boardArray[currentRow - 1][currentColumn - 1]
      && boardArray[currentRow][currentColumn] === boardArray[currentRow - 2][currentColumn - 2]
      && boardArray[currentRow][currentColumn] === boardArray[currentRow + 1][currentColumn + 1])
    || (boardArray[currentRow][currentColumn] === boardArray[currentRow + 1][currentColumn + 1]
      && boardArray[currentRow][currentColumn] === boardArray[currentRow + 2][currentColumn + 2]
      && boardArray[currentRow][currentColumn] === boardArray[currentRow - 1][currentColumn - 1])
    || (boardArray[currentRow][currentColumn] === boardArray[currentRow - 1][currentColumn + 1]
      && boardArray[currentRow][currentColumn] === boardArray[currentRow - 2][currentColumn + 2]
      && boardArray[currentRow][currentColumn] === boardArray[currentRow - 3][currentColumn + 3])
    || (boardArray[currentRow][currentColumn] === boardArray[currentRow + 1][currentColumn - 1]
      && boardArray[currentRow][currentColumn] === boardArray[currentRow + 2][currentColumn - 2]
      && boardArray[currentRow][currentColumn] === boardArray[currentRow + 3][currentColumn - 3])
    || (boardArray[currentRow][currentColumn] === boardArray[currentRow + 1][currentColumn - 1]
      && boardArray[currentRow][currentColumn] === boardArray[currentRow + 2][currentColumn - 2]
      && boardArray[currentRow][currentColumn] === boardArray[currentRow - 1][currentColumn + 1])
    || (boardArray[currentRow][currentColumn] === boardArray[currentRow - 1][currentColumn + 1]
      && boardArray[currentRow][currentColumn] === boardArray[currentRow - 2][currentColumn + 2]
      && boardArray[currentRow][currentColumn] === boardArray[currentRow - 1][currentColumn - 1])) {
    state.win = true;
    console.log(gameState.win, 'diagonal');
  }
  return gameState;
}
function winnerWinner(gameState) {
  // $('#win-banner').css('background-color', color);
  // $('#win-banner').css('display', 'flex');
  console.log(gameState.color, ' is win');
  if (gameState.color === 'red') {
    gameState.redScore++;
    console.log(gameState.redScore);
  } else {
    gameState.yellowScore++;
  }
  return gameState;
}
function reset(gameState) {
  gameState.boardArray = [
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null]];
  gameState.col0Row = 6;
  gameState.col1Row = 6;
  gameState.col2Row = 6;
  gameState.col3Row = 6;
  gameState.col4Row = 6;
  gameState.col5Row = 6;
  gameState.col6Row = 6;
  gameState.turn = 0;
  gameState.color = ' ';
  gameState.win = false;

  return gameState;
}

function resetGame(gameState) {
  reset(gameState);
  gameState.redScore = 0;
  gameState.yellowScore = 0;
  return gameState;
}

app.get('/state', (req, res) => {
  res.json(gameState);
});

app.post('/reset', (req, res) => {
  console.log('Mr Resetti');
  gameState = reset(gameState);
  res.json(gameState);
});

app.post('/resetGame', (req, res) => {
  console.log('Mr Resetti');
  gameState = resetGame(gameState);
  res.json(gameState);
});

app.post('/buttonPress', (req, res) => {
  gameState.currentColumn = parseInt(req.body.currentColumn, 10);
  gameState = buttonPressedLog(gameState);

  res.json(gameState);
});

if (process.env.NODE_ENV !== "test") {
  app.listen(8080, () => {
    console.log('server started on port 8080');
  });
}

if (typeof module !== 'undefined') {
  module.exports = {
    buttonPressedLog,
  };
}
