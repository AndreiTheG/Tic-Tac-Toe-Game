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
    if (document.getElementById('cell1').innerHTML == 'X' 
        && document.getElementById('cell2').innerHTML == 'X'
        && document.getElementById('cell3').innerHTML == 'X') {
            is_winner = true;
            document.getElementById('output').innerHTML = 'Winner!';
            document.getElementById('refresh').innerHTML = '<br><button class="btn btn-success" onclick="replay()">Play again</button>'
    } else if (document.getElementById('cell1').innerHTML == '0' 
        && document.getElementById('cell2').innerHTML == '0'
        && document.getElementById('cell3').innerHTML == '0') {
            is_winner = true;
            document.getElementById('output').innerHTML = 'Winner!';
            document.getElementById('refresh').innerHTML = '<br><button class="btn btn-success" onclick="replay()">Play again</button>'
    }  else if (document.getElementById('cell4').innerHTML == 'X' 
        && document.getElementById('cell5').innerHTML == 'X'
        && document.getElementById('cell6').innerHTML == 'X') {
            is_winner = true;
            document.getElementById('output').innerHTML = 'Winner!';
            document.getElementById('refresh').innerHTML = '<br><button class="btn btn-success" onclick="replay()">Play again</button>'
    }  else if (document.getElementById('cell4').innerHTML == '0' 
        && document.getElementById('cell5').innerHTML == '0'
        && document.getElementById('cell6').innerHTML == '0') {
            is_winner = true;
            document.getElementById('output').innerHTML = 'Winner!';
            document.getElementById('refresh').innerHTML = '<br><button class="btn btn-success" onclick="replay()">Play again</button>'
    }  else if (document.getElementById('cell7').innerHTML == 'X' 
        && document.getElementById('cell8').innerHTML == 'X'
        && document.getElementById('cell9').innerHTML == 'X') {
            is_winner = true;
            document.getElementById('output').innerHTML = 'Winner!';
            document.getElementById('refresh').innerHTML = '<br><button class="btn btn-success" onclick="replay()">Play again</button>'
    } else if (document.getElementById('cell7').innerHTML == '0' 
        && document.getElementById('cell8').innerHTML == '0'
        && document.getElementById('cell9').innerHTML == '0') {
            is_winner = true;
            document.getElementById('output').innerHTML = 'Winner!';
            document.getElementById('refresh').innerHTML = '<br><button class="btn btn-success" onclick="replay()">Play again</button>'
    } else if (document.getElementById('cell1').innerHTML == 'X' 
        && document.getElementById('cell4').innerHTML == 'X'
        && document.getElementById('cell7').innerHTML == 'X') {
            is_winner = true;
            document.getElementById('output').innerHTML = 'Winner!';
            document.getElementById('refresh').innerHTML = '<br><button class="btn btn-success" onclick="replay()">Play again</button>'
    } else if (document.getElementById('cell1').innerHTML == '0' 
        && document.getElementById('cell4').innerHTML == '0'
        && document.getElementById('cell7').innerHTML == '0') {
            is_winner = true;
            document.getElementById('output').innerHTML = 'Winner!';
            document.getElementById('refresh').innerHTML = '<br><button class="btn btn-success" onclick="replay()">Play again</button>'
    }  else if (document.getElementById('cell2').innerHTML == 'X' 
        && document.getElementById('cell5').innerHTML == 'X'
        && document.getElementById('cell8').innerHTML == 'X') {
            is_winner = true;
            document.getElementById('output').innerHTML = 'Winner!';
            document.getElementById('refresh').innerHTML = '<br><button class="btn btn-success" onclick="replay()">Play again</button>'
    }  else if (document.getElementById('cell2').innerHTML == '0' 
        && document.getElementById('cell5').innerHTML == '0'
        && document.getElementById('cell8').innerHTML == '0') {
            is_winner = true;
            document.getElementById('output').innerHTML = 'Winner!';
            document.getElementById('refresh').innerHTML = '<br><button class="btn btn-success" onclick="replay()">Play again</button>'
    }  else if (document.getElementById('cell3').innerHTML == 'X' 
        && document.getElementById('cell6').innerHTML == 'X'
        && document.getElementById('cell9').innerHTML == 'X') {
            is_winner = true;
            document.getElementById('output').innerHTML = 'Winner!';
            document.getElementById('refresh').innerHTML = '<br><button class="btn btn-success" onclick="replay()">Play again</button>'
    } else if (document.getElementById('cell3').innerHTML == '0' 
        && document.getElementById('cell6').innerHTML == '0'
        && document.getElementById('cell9').innerHTML == '0') {
            is_winner = true;
            document.getElementById('output').innerHTML = 'Winner!';
            document.getElementById('refresh').innerHTML = '<br><button class="btn btn-success" onclick="replay()">Play again</button>'
    } else if (document.getElementById('cell1').innerHTML == 'X' 
        && document.getElementById('cell5').innerHTML == 'X'
        && document.getElementById('cell9').innerHTML == 'X') {
            is_winner = true;
            document.getElementById('output').innerHTML = 'Winner!';
            document.getElementById('refresh').innerHTML = '<br><button class="btn btn-success" onclick="replay()">Play again</button>'
    } else if (document.getElementById('cell1').innerHTML == '0' 
        && document.getElementById('cell5').innerHTML == '0'
        && document.getElementById('cell9').innerHTML == '0') {
            is_winner = true;
            document.getElementById('output').innerHTML = 'Winner!';
            document.getElementById('refresh').innerHTML = '<br><button class="btn btn-success" onclick="replay()">Play again</button>'
    }  else if (document.getElementById('cell3').innerHTML == 'X' 
        && document.getElementById('cell5').innerHTML == 'X'
        && document.getElementById('cell7').innerHTML == 'X') {
            is_winner = true;
            document.getElementById('output').innerHTML = 'Winner!';
            document.getElementById('refresh').innerHTML = '<br><button class="btn btn-success" onclick="replay()">Play again</button>'
    }  else if (document.getElementById('cell3').innerHTML == '0' 
        && document.getElementById('cell5').innerHTML == '0'
        && document.getElementById('cell7').innerHTML == '0') {
            is_winner = true;
            document.getElementById('output').innerHTML = 'Winner!';
            document.getElementById('refresh').innerHTML = '<br><button class="btn btn-success" onclick="replay()">Play again</button>'
    } else if (pressedCellCount == 10) {
        document.getElementById('output').innerHTML = 'Draw!';   
        document.getElementById('refresh').innerHTML = '<br><button class="btn btn-success" onclick="replay()">Play again</button>'
    }
    if (is_winner == true) {
        for (let i = 1; i <= 9; ++i) {
            document.getElementById('cell' + i + '').onclick = null;           
        }
    }
}

function replay() {
    document.location.reload();
}