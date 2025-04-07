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
function addBoxes(){
    let boxes = 16;
    while (boxes != 0){
      
        //Create box instance
        const box = document.createElement("div");
        box.setAttribute("style", "width: 50px; height: 50px; background-color: gray; border: solid 1px; border-color: yellow; border-radius: 10px;");
      
        //Change box color based on hovering
        box.onmouseover = function(){box.style.backgroundColor = "pink";}
        box.onmouseout = function(){box.style.backgroundColor = "gray";}
      
        //Add boxes to container
        container.appendChild(box);
      
        //Lower number of boxes
        boxes -= 1;
    }
}


//Add the boxes to the container
addBoxes();

//Use flex to make the grid
container.setAttribute("style", "display: flex; flex-wrap: wrap; width: 208px;")
