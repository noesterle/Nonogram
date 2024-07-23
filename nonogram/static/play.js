function getCellRow(td){
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
            checkNonogram()
        }
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
            console.log(cell.getAttribute("id") + " " + cell.getAttribute("data"))
            if ((cell.getAttribute("id") == "unselected" && cell.getAttribute("data") == "True") || (cell.getAttribute("id") == "selected" && cell.getAttribute("data") == "False")) {
                console.log("Incorrect")
                incorrect = true
                if(incorrect){
                    break;
                }
            }
            //Win condition.
        }
        if(incorrect){
            console.log("Incorrect")
            break;
        }
   }
   incorrect = false   
}