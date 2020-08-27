const numRows = 6
const numColumns = 7
let isBlue = true
let squareColor = "blue"


function createRow() {
    const row = document.createElement("tr")
    //row.style.display = "block"
    //row.style.margin = "0 auto"
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
    /* circle.style.position= "fixed"
     circle.style.left= "50%"
     circle.style.top= "50%" */
    circle.style.display = "block"
    circle.style.margin = "0 auto"
    circle.style.height = "50px"
    circle.style.width = "50px"
    circle.style.borderRadius = "50%"
    circle.style.backgroundColor = "white"


    return circle
}

const board = document.getElementById("board")


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