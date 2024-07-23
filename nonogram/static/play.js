function getCellRow(td){
    win = false;
    td= td? td.target:window.event? event.srcElement:'';
    var rc= [], pa= td.parentNode;
    if(pa.tagName== 'TR'){
        rowIndex = pa.rowIndex
        cellIndex = td.cellIndex
        cell = document.getElementsByTagName('table')[0].rows[rowIndex].cells[cellIndex];
        if (cell.getAttribute('class') == 'gram'){
            // console.log(cell.id)
            if (cell.id == "selected") {
                cell.id = "unselected"
            }
            else {
                cell.id = "selected"
            }
            // console.log(cell.id)
            win = checkNonogram()
        }
    }
    if (win){
        //Win condition.
        if(!alert('Good job, you won the Nonogram! Click OK to play again.')){window.location.reload();}
    }
}

window.onload= function(){
    document.getElementsByTagName('table')[0].onclick=getCellRow;
}

function checkNonogram(){
    table = document.getElementsByTagName('table')[0]
    incorrect = false
    for (let row of table.rows) {
        for(let cell of row.cells) {
            //iterate through cells
            //cells would be accessed using the "cell" variable assigned in the for loop
            // console.log("checking")
            if (cell.getAttribute("class") == "gram"){
                // console.log(cell.getAttribute("class") + " " + cell.getAttribute("id") + " " + cell.getAttribute("data"))
                if ((cell.getAttribute("id") == "unselected" && cell.getAttribute("data") == "True") || (cell.getAttribute("id") == "selected" && cell.getAttribute("data") == "False")) {
                    incorrect = true
                    if(incorrect){
                        break;
                    }
                }
            }
        }
        if(incorrect){
            break;
        }
    }
    return !incorrect;
}