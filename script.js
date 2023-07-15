const container = document.querySelector(".container");

const gridSize = 256;
const calWidth = 520 / Math.pow(gridSize, 1/2);

console.log(calWidth)

for (let i = 0; i < gridSize; i++) {
    const div = document.createElement("div");
    div.classList.add("childDiv"); // connect style
    div.style.width = calWidth + "px"; // define the size
    container.appendChild(div); // add to the container
};
