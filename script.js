const container = document.querySelector(".container");

// Add slider input
const slider = document.querySelector("#slider");
let gridSize;

const sliderValue = document.querySelector("#slider-value");
sliderValue.textContent = "16 x 16"


//The default look (16x16)
window.addEventListener("load", () => {
    for (let i = 0; i < 256; i++) {
        const div = document.createElement("div");
        div.classList.add("defaultColor"); // connect style
        div.classList.add("childDiv"); // connect style
        div.style.width = 32.5 + "px"; // define the size
        container.appendChild(div); // add to the container
    };

    // listen to the color
    const colorPicked = document.querySelector("#colorPicker");
    let colorPickedValue = "black"

    colorPicked.addEventListener("input", () => {
        colorPickedValue = colorPicked.value;
        console.log(colorPickedValue)
    });

    // change the brush color
    const square = document.querySelectorAll(".childDiv");
    square.forEach((childDiv) => childDiv.addEventListener("mouseenter", () => {
        childDiv.style.backgroundColor = colorPickedValue;
    }));

    // clean the pad
    const clear = document.querySelector("#clear");
    clear.addEventListener("click", () => {
        square.forEach(function(one) {
            one.style.backgroundColor = "aquamarine";
        })
    });
});


//Changeable
slider.addEventListener("input", function() {
    gridSize = slider.value;
    const calWidth = 520 / gridSize;
    sliderValue.textContent = `${gridSize}` + " x " + `${gridSize}`;
    container.innerHTML = ''; // Clears all the content inside the div
    //Make the grid
    for (let i = 0; i < (Math.pow(gridSize, 2)); i++) {
        const div = document.createElement("div");
        div.classList.add("defaultColor"); // connect style
        div.classList.add("childDiv"); // connect style
        div.style.width = calWidth + "px"; // define the size
        container.appendChild(div); // add to the container
    };
    // listen to the color
    const colorPicked = document.querySelector("#colorPicker");
    let colorPickedValue = "black"

    colorPicked.addEventListener("input", () => {
        colorPickedValue = colorPicked.value;
        console.log(colorPickedValue)
    });

    // change brush color
    const square = document.querySelectorAll(".childDiv");
    square.forEach((childDiv) => childDiv.addEventListener("mouseenter", () => {
        childDiv.style.backgroundColor = colorPickedValue;
    }));

    // clean the pad
    const clear = document.querySelector("#clear");
    clear.addEventListener("click", () => {
        square.forEach(function(one) {
            one.style.backgroundColor = "aquamarine";
        })
    });
});
