const numRows = 6;
const numColumns = 7;
let isBlue = true;
let squareColor = 'blue';
let currentRow = '';
let currentColumn = '';
let col0Row = 5;
let col1Row = 5;
let col2Row = 5;
let col3Row = 5;
let col4Row = 5;
let col5Row = 5;
let col6Row = 5;
let color = '';
let win = false;
let boardArray = [
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null]];
let turn = 0;
let redScore = 0;
let yellowScore = 0;

function changeColor() {
  if (currentRow >= 0) {
    if (color === 'red') {
      color = 'yellow';
    } else {
      color = 'red';
    }
  }
  return color;
}
function createRow() {
  const row = document.createElement('tr');
  return row;
}

function createCell() {
  const cell = document.createElement('td');

  cell.style.height = '100px';
  cell.style.width = '100px';
  cell.style.backgroundColor = squareColor;

  createCircle();

  return cell;
}

function createCircle(circleid) {
  const circle = document.createElement('td');
  circle.style.display = 'block';
  circle.style.margin = '0 auto';
  circle.style.height = '50px';
  circle.style.width = '50px';
  circle.style.borderRadius = '50%';
  circle.style.backgroundColor = 'white';

  circle.id = circleid;

  return circle;
}

const board = document.getElementById('board');

$('#button0').click(() => {
  console.log('Hello 0');
  currentColumn = 0;
  buttonPressedLog();

  return currentColumn;
});
$('#button1').click(() => {
  console.log('Hello 1');
  currentColumn = 1;
  buttonPressedLog();

  return currentColumn;
});
$('#button2').click(() => {
  console.log('Hello 2');
  currentColumn = 2;
  buttonPressedLog();

  return currentColumn;
});
$('#button3').click(() => {
  console.log('Hello 3');
  currentColumn = 3;
  buttonPressedLog();

  return currentColumn;
});
$('#button4').click(() => {
  console.log('Hello 4');
  currentColumn = 4;
  buttonPressedLog();

  return currentColumn;
});
$('#button5').click(() => {
  console.log('Hello 5');
  currentColumn = 5;
  buttonPressedLog();

  return currentColumn;
});
$('#button6').click(() => {
  console.log('Hello 6');
  currentColumn = 6;
  buttonPressedLog();

  return currentColumn;
});

function buttonPressedLog() {
  const cell = createCell(squareColor);
  console.log('buttonPressed');
  if (!win) {
    if (currentColumn === 0) {
      currentRow = col0Row;
      col0Row--;
    }
    if (currentColumn === 1) {
      currentRow = col1Row;
      col1Row--;
    }
    if (currentColumn === 2) {
      currentRow = col2Row;
      col2Row--;
    }
    if (currentColumn === 3) {
      currentRow = col3Row;
      col3Row--;
    }
    if (currentColumn === 4) {
      currentRow = col4Row;
      col4Row--;
    }
    if (currentColumn === 5) {
      currentRow = col5Row;
      col5Row--;
    }
    if (currentColumn === 6) {
      currentRow = col6Row;
      col6Row--;
    }
    const circleid = `circle-${currentRow}-${currentColumn}`;
    console.log(circleid);
    color = changeColor(color);
    const circle = createCircle(circleid);
    $(`#${circleid}`).css('background-color', color);
    cell.appendChild(circle);
    if (currentRow >= 0) {
      boardArray[currentRow][currentColumn] = color;
      console.log(boardArray[currentRow][currentColumn]);
      checkWin();
      turn++;
    }
    if (turn >= 42) {
      console.log("it's a draw");
    }
  }
  console.log(color);
}
function verticalWin() {
  if ((boardArray[currentRow][currentColumn] === boardArray[currentRow + 1][currentColumn]
    && boardArray[currentRow][currentColumn] === boardArray[currentRow + 2][currentColumn]
    && boardArray[currentRow][currentColumn] === boardArray[currentRow + 3][currentColumn])) {
    win = true;
    console.log(win, 'vertical');
  }
  return win;
}
function horizontalWin() {
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
    win = true;
    console.log(win, 'horizontal');
  }
  return win;
}
function diagonalWin() {
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
    win = true;
    console.log(win, 'diagonal');
  }
  return win;
}

function checkWin() {
  verticalWin();
  horizontalWin();
  diagonalWin();
  if (win) {
    winnerWinner();
  }
}

function winnerWinner() {
  $('#win-banner').css('background-color', color);
  $('#win-banner').css('display', 'flex');
  console.log(color, ' is win');
  if (color === 'red') {
    redScore++;
  } else {
    yellowScore++;
  }
}
function generateBoard() {
  $('#win-banner').css('display', 'none');
  for (let i = 0; i < numRows; i++) {
    const row = createRow();
    isBlue = i % 2 === 0;
    for (let j = 0; j < numColumns; j++) {
      if (isBlue) {
        squareColor = 'blue';
      } else {
        squareColor = 'darkblue';
      }
      const cell = createCell(squareColor);
      const circleid = `circle-${i}-${j}`;
      const circle = createCircle(circleid);

      row.appendChild(cell);
      cell.appendChild(circle);

      isBlue = !isBlue;
    }
    board.appendChild(row);
  }
}
$('#resetBtn').click(() => {
  reset();
});

$('#resetGameBtn').click(() => {
  resetGame();
});

function reset() {
  while (board.firstChild) {
    board.removeChild(board.firstChild);
  }
  generateBoard();
  boardArray = [
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null]];
  col0Row = 5;
  col1Row = 5;
  col2Row = 5;
  col3Row = 5;
  col4Row = 5;
  col5Row = 5;
  col6Row = 5;
  turn = 0;
  color = ' ';
  win = false;
}
function resetGame() {
  reset();
  redScore = 0;
  yellowScore = 0;
}
generateBoard();
