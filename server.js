/* const express = require('express');
const {
  buttonPressedLog,
} = require('./backEnd.js');

const app = express();
app.use(express.json());
app.use(express.static('.'));
// Creates roots to send html files

let gameState = {
  numRows: 6,
  numColumns: 7,
  isBlue: true,
  squareColor: 'blue',
  currentRow: 5,
  currentColumn: '',
  col0Row: 5,
  col1Row: 5,
  col2Row: 5,
  col3Row: 5,
  col4Row: 5,
  col5Row: 5,
  col6Row: 5,
  color: 'red',
  win: false,
  boardArray: [
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null]],
  turn: 0,
  redScore: 0,
  yellowScore: 0,
};

// app.get('/:a/:b', (req, res) => {
//   const sum = req.params.a + req.params.b;

//   console.log(req.params.a);
//   console.log(req.params.b);
//   console.log(sum);
//   res.json({
//     content: sum,
//   });
// });

app.get('/state', (req, res) => {
  res.json(gameState).send();
});

// request = {
//  "button": "3"
// }

app.post('/', (req, res) => {
  console.log(req.body.button);
  gameState.currentColumn = parseInt(req.body.button);
  gameState = buttonPressedLog(gameState);
  res.json(gameState).send();
});

app.listen(8080, () => {
  console.log('server is running');
});
*/
