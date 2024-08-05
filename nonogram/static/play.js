function cellOnClick(event){
    win = false
    cell = event.target
    if (cell.id == "selected") {
        cell.id = "unselected"
    }
    else {
        cell.id = "selected"
    }
    win = checkNonogram()
    if (win){
        //Win condition.
        if(!alert('Good job, you won the Nonogram! Click OK to play again.')){document.location.href = '/size';}
    }
}

window.onload= function(){
    var cells = document.querySelectorAll("#nonogram td");
    for (let cell of cells) {
        if (cell.classList.contains("gram")){
            cell.addEventListener("click", cellOnClick)
        }
    }
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