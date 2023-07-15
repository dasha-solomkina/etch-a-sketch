const container = document.querySelector(".container");

const gridSize = 256;
const calWidth = 520 / Math.pow(gridSize, 1/2);

//Make the grid
for (let i = 0; i < gridSize; i++) {
    const div = document.createElement("div");
    div.classList.add("childDiv"); // connect style
    div.classList.add("childDiv2"); // connect style
    div.style.width = calWidth + "px"; // define the size
    container.appendChild(div); // add to the container
};

// change the color of the grid item when clicked
// CHANGE FROM CLICK TO CLICK AND HOVER
const square = document.querySelectorAll(".childDiv2");

square.forEach((childDiv2) => childDiv2.addEventListener("click", () => {
    console.log(childDiv2);
    childDiv2.classList.remove("childDiv");
}));

// Add slider input

