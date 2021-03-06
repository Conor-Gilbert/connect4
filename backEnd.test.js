// const {} = require('jest');
const { buttonPressedLog } = require('./backEnd');
const { reset } = require('./backEnd');
const { resetGame } = require('./backEnd');
// const { gameState } = require('./backEnd');

test('buttonPressChangesRow', () => {
  const gameState = {
    numRows: 6,
    numColumns: 7,
    isBlue: true,
    squareColor: 'blue',
    currentRow: 5,
    currentColumn: 0,
    col0Row: 5,
    color: 'yellow',
    win: false,
    draw: false,
    boardArray: [
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
  buttonPressedLog(gameState);
  expect(gameState.col0Row).toBe(4);
});
test('boardArrayPlacement', () => {
  const gameState = {
    numRows: 6,
    numColumns: 7,
    isBlue: true,
    squareColor: 'blue',
    currentRow: 5,
    currentColumn: 0,
    col0Row: 4,
    color: 'red',
    win: false,
    draw: false,
    boardArray: [
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      ['red', null, null, null, null, null, null],
      [null, null, null, null, null, null, null]], // column 7 is kept empty
    turn: 0,
    redScore: 0,
    yellowScore: 0,
  };
  buttonPressedLog(gameState);
  // console.log(gameState.boardArray);
  expect(gameState.boardArray).toStrictEqual(
    [[null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      ['yellow', null, null, null, null, null, null],
      ['red', null, null, null, null, null, null],
      [null, null, null, null, null, null, null]],
  );
});

test('verticalWinCheck', () => {
  const gameState = {
    numRows: 6,
    numColumns: 7,
    isBlue: true,
    squareColor: 'blue',
    currentRow: 5,
    currentColumn: 0,
    col0Row: 2,
    color: 'yellow',
    win: false,
    draw: false,
    boardArray: [
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      ['red', null, null, null, null, null, null],
      ['red', null, null, null, null, null, null],
      ['red', null, null, null, null, null, null],
      [null, null, null, null, null, null, null]], // column 7 is kept empty
    turn: 0,
    redScore: 0,
    yellowScore: 0,
  };
  buttonPressedLog(gameState);
  // console.log(gameState.boardArray);
  expect(gameState.win).toBe(true);
});

test('horizontalWinCheck', () => {
  const gameState = {
    numRows: 6,
    numColumns: 7,
    isBlue: true,
    squareColor: 'blue',
    currentRow: 5,
    currentColumn: 3,
    col0Row: 6,
    col1Row: 6,
    col2Row: 6,
    col3Row: 6,
    col4Row: 6,
    col5Row: 6,
    col6Row: 6,
    color: 'yellow',
    win: false,
    draw: false,
    boardArray: [
      [null, null, null, null, null, null, null], // column 0 is kept empty
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      ['red', 'red', 'red', null, null, null, null],
      [null, null, null, null, null, null, null]], // column 7 is kept empty
    turn: 0,
    redScore: 0,
    yellowScore: 0,
  };
  buttonPressedLog(gameState);
  //    console.log(gameState.boardArray);
  expect(gameState.win).toBe(true);
});
test('diagonalWinCheck', () => {
  const gameState = {
    numRows: 6,
    numColumns: 7,
    isBlue: true,
    squareColor: 'blue',
    currentRow: 5,
    currentColumn: 3,
    col0Row: 6,
    col1Row: 6,
    col2Row: 6,
    col3Row: 3,
    col4Row: 6,
    col5Row: 6,
    col6Row: 6,
    color: 'yellow',
    win: false,
    draw: false,
    boardArray: [
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, 'red', null, null, null, null],
      [null, 'red', null, null, null, null, null],
      ['red', null, null, null, null, null, null],
      [null, null, null, null, null, null, null]], // column 7 is kept empty
    turn: 0,
    redScore: 0,
    yellowScore: 0,
  };
  buttonPressedLog(gameState);
  // console.log(gameState.boardArray);
  expect(gameState.win).toBe(true);
});
test('diagonalTopWinCheck', () => {
  const gameState = {
    numRows: 6,
    numColumns: 7,
    isBlue: true,
    squareColor: 'blue',
    currentRow: 5,
    currentColumn: 3,
    col0Row: 6,
    col1Row: 6,
    col2Row: 6,
    col3Row: 1,
    col4Row: 6,
    col5Row: 6,
    col6Row: 6,
    color: 'yellow',
    win: false,
    draw: false,
    boardArray: [
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, 'red', null, null, null, null],
      [null, 'red', null, null, null, null, null],
      ['red', null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null]], // column 7 is kept empty
    turn: 0,
    redScore: 0,
    yellowScore: 0,
  };
  buttonPressedLog(gameState);
  // console.log(gameState.boardArray);
  expect(gameState.win).toBe(true);
});

describe('Check reset buttons work', () => {
  const gameState = {
    numRows: 6,
    numColumns: 7,
    isBlue: true,
    squareColor: 'blue',
    currentRow: 5,
    currentColumn: 3,
    col0Row: 1,
    col1Row: 5,
    col2Row: 2,
    col3Row: 1,
    col4Row: 2,
    col5Row: 3,
    col6Row: 4,
    color: 'yellow',
    win: false,
    draw: false,
    boardArray: [
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, 'red', null, 'red', null, null],
      [null, 'red', null, null, null, null, null],
      ['red', null, null, null, 'yellow', null, null],
      [null, null, 'yellow', null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null]], // column 7 is kept empty
    turn: 18,
    redScore: 3,
    yellowScore: 6,
  };
  test('should reset everything but the scores', () => {
    const gameStateExpect = {
      numRows: 6, // used to generate the cells and circles of the board
      numColumns: 7,
      isBlue: true,
      squareColor: 'blue',
      currentRow: 5,
      currentColumn: 3,
      col0Row: 6,
      col1Row: 6,
      col2Row: 6,
      col3Row: 6,
      col4Row: 6,
      col5Row: 6,
      col6Row: 6,
      color: 'yellow',
      win: false,
      draw: false,
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
      redScore: 3,
      yellowScore: 6,
    };
    reset(gameState);
    expect(gameState).toStrictEqual(gameStateExpect);
  });
  test('should reset everything but the scores', () => {
    const gameStateExpect = {
      numRows: 6, // used to generate the cells and circles of the board
      numColumns: 7,
      isBlue: true,
      squareColor: 'blue',
      currentRow: 5,
      currentColumn: 3,
      col0Row: 6,
      col1Row: 6,
      col2Row: 6,
      col3Row: 6,
      col4Row: 6,
      col5Row: 6,
      col6Row: 6,
      color: 'yellow',
      win: false,
      draw: false,
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
    resetGame(gameState);
    expect(gameState).toStrictEqual(gameStateExpect);
  });
});
test('draw is detected', () => {
  const gameState = {
    numRows: 6, // used to generate the cells and circles of the board
    numColumns: 7,
    isBlue: true,
    squareColor: 'blue',
    currentRow: 5,
    currentColumn: 3,
    col0Row: 6,
    col1Row: 6,
    col2Row: 6,
    col3Row: 6,
    col4Row: 6,
    col5Row: 6,
    col6Row: 6,
    color: 'yellow',
    win: false,
    draw: false,
    boardArray: [
      [null, null, null, null, null, null, null], // column 0 is kept empty
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null]], // column 7 is kept empty
    turn: 41,
    redScore: 3,
    yellowScore: 6,
  };
  buttonPressedLog(gameState);
  expect(gameState.draw).toBe(true);
});
