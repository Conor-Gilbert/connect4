const numRows = 6 
const numColumns = 7
let isBlue = true
let squareColor = "blue"
let buttonPressed = false
let currentRow = 7

function createRow() {
    const row = document.createElement("tr")
    return row
}

function createCell(squareColor) {
    const cell = document.createElement("td")

    cell.style.height = "100px"
    cell.style.width = "100px"
    cell.style.backgroundColor = squareColor

    createCircle()

    return cell
}

function createCircle() {
    const circle = document.createElement("td")
    circle.style.display = "block"
    circle.style.margin = "0 auto"
    circle.style.height = "50px"
    circle.style.width = "50px"
    circle.style.borderRadius = "50%"
    circle.style.backgroundColor = "white"


    return circle
}

const board = document.getElementById("board")

const button0Press = document.getElementById('button0');
button0.onclick = function() {
    console.log('Hello 0');
    buttonPressed = true
    currentRow = 0
}
const button1Press = document.getElementById('button1');
button1.onclick = function() {
    console.log('Hello 1');
    buttonPressed = true
    currentRow = 1
}
const button2Press = document.getElementById('button2');
button2.onclick = function() {
    console.log('Hello 2');
    buttonPressed = true
    currentRow = 2
}
const button3Press = document.getElementById('button3');
button3.onclick = function() {
    console.log('Hello 3');
    buttonPressed = true
    currentRow = 3
}
const button4Press = document.getElementById('button4');
button4.onclick = function() {
    console.log('Hello 4');
    buttonPressed = true
    currentRow = 4
}
const button5Press = document.getElementById('button5');
button5.onclick = function() {
    console.log('Hello 5');
    buttonPressed = true
    currentRow = 5
}
const button6Press = document.getElementById('button6');
button6.onclick = function() {
    console.log('Hello 6');
    buttonPressed = true
    currentRow = 6

}
function buttonPressedLog() {
    console.log("buttonPressed")
}


for (let i = 0; i < numRows; i++) {
    const row = createRow()
    isBlue = i % 2 === 0
    for (let j = 0; j < numColumns; j++) {

        if (isBlue) {
            squareColor = "blue"
        } else {
            squareColor = "darkblue"
        }
        const cell = createCell(squareColor)
        const circle = createCircle()
        row.appendChild(cell)
        cell.appendChild(circle)

        isBlue = !isBlue
    }
    board.appendChild(row)
}