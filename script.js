//Reference the grid container
const container = document.querySelector("#container");
const buttonContainer = document.querySelector("#buttonContainer");

//Add top button
const button = document.createElement("button");
button.setAttribute("style", "background-color: blue; color: white; width: 100px; height: 30px; border-radius: 5px;")
button.innerText = "Click Me!";
button.onmouseover = function(){button.style.backgroundColor = "black";}
button.onmouseout = function(){button.style.backgroundColor = "blue";}
buttonContainer.appendChild(button);


//Function to add div boxes to container
function addRows(num){
    let number = num;
    for (let i = 0; i < number; i++){
        //Create row instance
        const row = document.createElement("div");
        row.setAttribute("style", "display: flex;");
        for (let j = 0; j < number; j++){
            const column = document.createElement("div");
            column.setAttribute("style", "width: 40px; height: 40px; background-color: pink; border: solid 1px; border-color: green;")
            column.onmouseover = function(){column.style.backgroundColor = "black";}
            column.onmouseout = function(){column.style.backgroundColor = "pink";}
            row.appendChild(column);
        }
        //Add rows to container
        container.appendChild(row);
        //Lower number of rows
        //rows -= 1;
    }
}


//Add the boxes to the container
addRows(4);

