//Reference the grid container
const container = document.querySelector("#container");

//Function to add div boxes to container
function addBoxes(){
    let boxes = 16;
    while (boxes != 0){
        //Create box instance
        const box = document.createElement("div");
        box.setAttribute("style", "width: 50px; height: 50px; background-color: gray; border: solid 1px; border-color: yellow; border-radius: 10px;");
        box.setAttribute("onmouseenter", "mouseEnter(this)");
        box.setAttribute("onmouseleave", "mouseLeave(this)");
        //Add boxes to container
        container.appendChild(box);
        //Lower number of boxes
        boxes -= 1;
    }
}

function mouseEnter(x){
    x.style.backgroundcolor = "red";
}

function mouseLeave(x){
    x.style.height = "50px";
}

//Add the boxes to the container
addBoxes();

//Use flex to make the grid
container.setAttribute("style", "display: flex; flex-wrap: wrap; width: 208px;")