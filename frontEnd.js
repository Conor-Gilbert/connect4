/* eslint-disable no-use-before-define */
/* eslint-disable no-param-reassign */
/* eslint-disable no-console */

function createRow() {
  const row = document.createElement('tr');
  return row;
}

function createCell(squareColor) {
  const cell = document.createElement('td');

  cell.style.height = '100px';
  cell.style.width = '100px';
  cell.style.backgroundColor = squareColor;

  createCircle();

  return cell;
}

function createCircle(circleid, cellContents) {
  const circle = document.createElement('td');
  circle.style.display = 'block';
  circle.style.margin = '0 auto';
  circle.style.height = '50px';
  circle.style.width = '50px';
  circle.style.borderRadius = '50%';
  if (cellContents !== null) {
    circle.style.backgroundColor = cellContents;
  } else {
    circle.style.backgroundColor = 'white';
  }
  circle.id = circleid;

  return circle;
}

function generateBoard(gameState, board) {
  // console.log('I\'m trying!!!!');
  $('.redDisplay').text(`${gameState.redScore}`);
  $('.yellowDisplay').text(`${gameState.yellowScore}`);
  $('.win-banner').css('display', 'none');
  $('.draw-banner').css('display', 'none');
  $('.why').css('display', 'none');
  // console.log(gameState);
  for (let i = 0; i < parseInt(gameState.numRows, 10); i++) {
    const row = createRow();
    gameState.isBlue = i % 2 === 0;

    for (let j = 0; j < parseInt(gameState.numColumns, 10); j++) {
      if (gameState.isBlue) {
        gameState.squareColor = 'blue';
      } else {
        gameState.squareColor = 'darkblue';
      }
      const cell = createCell(gameState.squareColor);
      const circleid = `circle-${i + 1}-${j + 1}`;
      const circle = createCircle(circleid, gameState.boardArray[i + 1][j]);// i+1keepbottomrowempty
      row.appendChild(cell);
      cell.appendChild(circle);

      gameState.isBlue = !gameState.isBlue;
    }
    board.appendChild(row);
  }
  if (gameState.win === true) {
    console.log(gameState.win, 'win?');
    console.log(gameState.redScore);
    $('.win-banner').css('background-color', gameState.color);
    $('.win-banner').css('display', 'flex');
    $('.redDisplay').text(`${gameState.redScore}`);
    $('.yellow-display').text(`${gameState.yellowScore}`);
    if (gameState.redScore + gameState.yellowScore >= 7) {
      $('.why').css('display', 'flex');
    }
  }
  if (gameState.draw === true) {
    console.log(gameState.win, 'draw');
    $('.draw-banner').css('display', 'flex');
  }
  return gameState;
}

$('#button0').click(() => {
  console.log('Hello 0');
  const body = {
    currentColumn: 0,
  };
  $.ajax({
    method: 'POST',
    url: '/buttonPress',
    dataType: 'json',
    data: JSON.stringify(body),
    contentType: 'application/json',
    success: (res) => {
      // console.log(res);
      const board = document.getElementById('board');
      while (board.firstChild) {
        board.removeChild(board.firstChild);
      }
      generateBoard(res, board);
    },
    error: (res) => {
      console.log(res);
    },
  });

  // buttonPressedLog();

  // return currentColumn;
});
$('#button1').click(() => {
  console.log('Hello 1');
  const body = {
    currentColumn: 1,
  };

  $.ajax({
    method: 'POST',
    url: '/buttonPress',
    dataType: 'json',
    data: JSON.stringify(body),
    contentType: 'application/json',
    success: (res) => {
      // console.log(res);
      const board = document.getElementById('board');
      while (board.firstChild) {
        board.removeChild(board.firstChild);
      }
      generateBoard(res, board);
    },
    error: (res) => {
      console.log(res);
    },
  });
  // currentColumn = 1;
  // buttonPressedLog();

  // return currentColumn;
});
$('#button2').click(() => {
  console.log('Hello 2');
  const body = {
    currentColumn: 2,
  };

  $.ajax({
    method: 'POST',
    url: '/buttonPress',
    dataType: 'json',
    data: JSON.stringify(body),
    contentType: 'application/json',
    success: (res) => {
      // console.log(res);
      const board = document.getElementById('board');
      while (board.firstChild) {
        board.removeChild(board.firstChild);
      }
      generateBoard(res, board);
    },
    error: (res) => {
      console.log(res);
    },
  });
  // currentColumn = 2;
  // buttonPressedLog();

  // return currentColumn;
});
$('#button3').click(() => {
  console.log('Hello 3');
  const body = {
    currentColumn: 3,
  };

  $.ajax({
    method: 'POST',
    url: '/buttonPress',
    dataType: 'json',
    data: JSON.stringify(body),
    contentType: 'application/json',
    success: (res) => {
      // console.log(res);
      const board = document.getElementById('board');
      while (board.firstChild) {
        board.removeChild(board.firstChild);
      }
      generateBoard(res, board);
    },
    error: (res) => {
      console.log(res);
    },
  });
  // currentColumn = 3;
  // buttonPressedLog();

  // return currentColumn;
});
$('#button4').click(() => {
  console.log('Hello 4');
  const body = {
    currentColumn: 4,
  };

  $.ajax({
    method: 'POST',
    url: '/buttonPress',
    dataType: 'json',
    data: JSON.stringify(body),
    contentType: 'application/json',
    success: (res) => {
      // console.log(res);
      const board = document.getElementById('board');
      while (board.firstChild) {
        board.removeChild(board.firstChild);
      }
      generateBoard(res, board);
    },
    error: (res) => {
      console.log(res);
    },
  });
  // currentColumn = 4;
  // buttonPressedLog();

  // return currentColumn;
});
$('#button5').click(() => {
  console.log('Hello 5');
  const body = {
    currentColumn: 5,
  };

  $.ajax({
    method: 'POST',
    url: '/buttonPress',
    dataType: 'json',
    data: JSON.stringify(body),
    contentType: 'application/json',
    success: (res) => {
      // console.log(res);
      const board = document.getElementById('board');
      while (board.firstChild) {
        board.removeChild(board.firstChild);
      }
      generateBoard(res, board);
    },
    error: (res) => {
      console.log(res);
    },
  });
  // currentColumn = 5;
  // buttonPressedLog();

  // return currentColumn;
});
$('#button6').click(() => {
  console.log('Hello 6');
  const body = {
    currentColumn: 6,
  };
  $.ajax({
    method: 'POST',
    url: '/buttonPress',
    dataType: 'json',
    data: JSON.stringify(body),
    contentType: 'application/json',
    success: (res) => {
    //  console.log(res);
      const board = document.getElementById('board');
      while (board.firstChild) {
        board.removeChild(board.firstChild);
      }
      generateBoard(res, board);
    },
    error: (res) => {
      console.log(res);
    },
  });
});

$('#resetBtn').click(() => {
  console.log('reset click');
  const board = document.getElementById('board');
  while (board.firstChild) {
    board.removeChild(board.firstChild);
  }
  const body = {
  };
  $.ajax({
    method: 'POST',
    url: '/reset',
    dataType: 'json',
    data: JSON.stringify(body),
    contentType: 'application/json',
    success: (res) => {
      console.log('success');
      generateBoard(res, board);
    },
  });
});

$('#resetGameBtn').click(() => {
  console.log('reset click');
  const board = document.getElementById('board');
  while (board.firstChild) {
    board.removeChild(board.firstChild);
  }
  const body = {
  };
  $.ajax({
    method: 'POST',
    url: '/resetGame',
    dataType: 'json',
    data: JSON.stringify(body),
    contentType: 'application/json',
    success: (res) => {
      console.log('success');
      generateBoard(res, board);
    },
  });
});

let gameState = {};

$.get('/state', (data) => {
  gameState = data;

  const board = document.getElementById('board');
  generateBoard(gameState, board);
});
