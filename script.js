let pressedCellCount = 1;

function pressCell(numberCell) {
    if (pressedCellCount % 2 != 0) {
        document.getElementById('cell' + numberCell + '').innerHTML = 'X';
    } else {
        document.getElementById('cell'  + numberCell + '').innerHTML = '0';
    }
    console.log(pressedCellCount);
    if (document.getElementById('cell' + numberCell + '').onclick != null) {
        document.getElementById('cell' + numberCell + '').onclick = null;
        ++pressedCellCount;
    }
    results();
}

function results() {
    let is_winner = false;
    let nextCellsRow = 0;
    for (let i = 1; i <= 3 && is_winner == false; ++i) {
        let countXValue = 0, count0Value = 0;
        for (let j = nextCellsRow + 1; j <= nextCellsRow + 3; ++j) {
            if (document.getElementById('cell' + j + '').innerHTML == 'X') {
                ++countXValue;
            } else if (document.getElementById('cell' + j + '').innerHTML == '0') {
                ++count0Value;
            }
        }
        if (countXValue == 3 || count0Value == 3) {
            is_winner = true;
        }
        nextCellsRow += 3;        
    }
    let nextCellsColumn = 0;
    for (let i = 1; i <= 3 && is_winner == false; ++i) {
        let countXValue = 0, count0Value = 0;
        for (let j = nextCellsColumn + 1; j <= nextCellsColumn + 7; j += 3) {
            if (document.getElementById('cell' + j + '').innerHTML == 'X') {
                ++countXValue;
            } else if (document.getElementById('cell' + j + '').innerHTML == '0') {
                ++count0Value;
            }
        }
        if (countXValue == 3 || count0Value == 3) {
            is_winner = true;
        }
        ++nextCellsColumn;
    }
    let mainDiagonalXValue = 0, mainDiagonal0Value = 0;
    for (let i = 1; i <= 9; i += 4) {
        if (document.getElementById('cell' + i + '').innerHTML == 'X') {
            ++mainDiagonalXValue;
        } else if (document.getElementById('cell' + i + '').innerHTML == '0') {
            ++mainDiagonal0Value;
        }
    }
    if (mainDiagonalXValue == 3 || mainDiagonal0Value == 3) {
        is_winner = true;
    }
    let secondaryDiagonalXValue = 0, secondaryDiagonal0Value = 0;
    for (let i = 3; i <= 7; i += 2) {
        if (document.getElementById('cell' + i + '').innerHTML == 'X') {
            ++secondaryDiagonalXValue;
        } else if (document.getElementById('cell' + i + '').innerHTML == '0') {
            ++secondaryDiagonal0Value;
        }
    }
    if (secondaryDiagonalXValue == 3 || secondaryDiagonal0Value == 3) {
        is_winner = true;
    }
    if (is_winner == true) {
        document.getElementById('output').innerHTML = 'Winner!';
        document.getElementById('refresh').innerHTML = '<br><button class="btn btn-success" onclick="replay()">Play again</button>'
        for (let i = 1; i <= 9; ++i) {
            document.getElementById('cell' + i + '').onclick = null;           
        }
    } else if (pressedCellCount == 10) {
        document.getElementById('output').innerHTML = 'Draw!';   
        document.getElementById('refresh').innerHTML = '<br><button class="btn btn-success" onclick="replay()">Play again</button>'
    }
}

function replay() {
    document.location.reload();
}