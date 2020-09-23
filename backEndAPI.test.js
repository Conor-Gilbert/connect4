const request = require('supertest');
const {
  gameState,
  app,
} = require('./backEnd.js');

describe('POST /buttonPress', () => {
  test('should change array to add red', (done) => {
    const gameState = {
      numRows: 6, // used to generate the cells and circles of the board
      numColumns: 7,
      isBlue: true,
      squareColor: 'blue',
      currentRow: 6,
      currentColumn: 0,
      col0Row: 5,
      col1Row: 6,
      col2Row: 6,
      col3Row: 6,
      col4Row: 6,
      col5Row: 6,
      col6Row: 6,
      color: 'red',
      win: false,
      boardArray: [
        [null, null, null, null, null, null, null], // column 0 is kept empty
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        ['red', null, null, null, null, null, null],
        [null, null, null, null, null, null, null]], // column 7 is kept empty
      turn: 1,
      redScore: 0,
      yellowScore: 0,
    };
    request(app)
      .post('/buttonPress')
      .send({
        currentColumn: 0,
      })
      .expect(gameState)
      .end(done);
  });
});
describe('POST /resetBtn', () => {
  test('reset button changes gameState', (done) => {
    const gameState = {
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
    request(app)
      .post('/reset')
      .send({
        currentColumn: 0,
      })
      .expect(gameState)
      .end(done);
  });
});
