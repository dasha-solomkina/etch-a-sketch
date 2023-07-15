const container = document.querySelector(".container");

// Add slider input
const slider = document.querySelector("#slider");
let gridSize = 2;

slider.addEventListener("change", function() {
    gridSize = slider.value;
    console.log(gridSize);
    const calWidth = 520 / gridSize;
    container.innerHTML = ''; // Clears all the content inside the div
    //Make the grid
    for (let i = 0; i < (Math.pow(gridSize, 2)); i++) {
        const div = document.createElement("div");
        div.classList.add("childDiv"); // connect style
        div.classList.add("childDiv2"); // connect style
        div.style.width = calWidth + "px"; // define the size
        container.appendChild(div); // add to the container
    };
});



// change the color of the grid item when clicked
// CHANGE FROM CLICK TO CLICK AND HOVER
const square = document.querySelectorAll(".childDiv2");

square.forEach((childDiv2) => childDiv2.addEventListener("click", () => {
    console.log(childDiv2);
    childDiv2.classList.remove("childDiv");
}));


