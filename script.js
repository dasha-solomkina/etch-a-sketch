const container = document.querySelector(".container");

// Add slider input
const slider = document.querySelector("#slider");
let gridSize;

//The default look (16x16)
for (let i = 0; i < 256; i++) {
    const div = document.createElement("div");
    div.classList.add("defaultColor"); // connect style
    div.classList.add("childDiv"); // connect style
    div.style.width = 32.5 + "px"; // define the size
    container.appendChild(div); // add to the container
};


slider.addEventListener("change", function() {
    gridSize = slider.value;
    const calWidth = 520 / gridSize;
    container.innerHTML = ''; // Clears all the content inside the div
    //Make the grid
    for (let i = 0; i < (Math.pow(gridSize, 2)); i++) {
        const div = document.createElement("div");
        div.classList.add("defaultColor"); // connect style
        div.classList.add("childDiv"); // connect style
        div.style.width = calWidth + "px"; // define the size
        container.appendChild(div); // add to the container
    };
    // change the color of the grid item when clicked
    const square = document.querySelectorAll(".childDiv");
    square.forEach((childDiv) => childDiv.addEventListener("mouseenter", () => {
        childDiv.classList.remove("defaultColor");
    }));
    // clean the pad
    const clear = document.querySelector("#clear");
    clear.addEventListener("click", () => {
        square.forEach(function(element) {
            element.classList.add("defaultColor")
        });
    });
});



// listen to the color
const colorPicked = document.querySelector("#colorPicker");

colorPicked.addEventListener("input", () => {
    console.log(colorPicked.value)
});