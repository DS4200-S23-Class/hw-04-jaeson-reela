// Define the Size of the SVG Container
const width = 500;
const height = 500;

// Setting Given Points as Fixed Points on Plot
const data = [{x: 1, y: 2},  {x: 2, y: 4},  {x: 6, y: 2}, {x: 9, y: 9}];

// Create the SVG Container
const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
svg.setAttribute("width", width);
svg.setAttribute("height", height);

// Define Function to Update Last Clicked Point
function updateLastClickedText(x, y) {
  const lastClicked = document.getElementById("last-click");
  lastClicked.textContent = "Last Point Clicked: (" + x + ", " + y + ")";
}

// Add Points to SVG Container
for (let i = 0; i < data.length; i++) {
  const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  circle.setAttribute("cx", (data[i].x / 10) * width);
  circle.setAttribute("cy", height - (data[i].y / 10) * height);
  
  // Add Click Event Listener to Each Original Point
  circle.addEventListener("click", function() {
    updateLastClickedText(data[i].x, data[i].y);
  });

  // Add Mouse Enter Event Listener to Add Highlighted Class to Circle
  circle.addEventListener("mouseenter", () => {
  circle.classList.add("highlighted");
});

  // Add Mouse Enter Event Listener to Remove Highlighted Class to Circle
  circle.addEventListener("mouseleave", () => {
  circle.classList.remove("highlighted");
});

  // Add Click Event Listener to Each Point
circle.addEventListener("click", function() {
  updateLastClickedText(data[i].x, data[i].y);
  if (circle.classList.contains("clicked")) {
    circle.classList.remove("clicked");
  } else {
    circle.classList.add("clicked");
  }
  });

  svg.appendChild(circle);
}

// Append the SVG Element to the Container Element
const container = document.getElementById("svg");
container.appendChild(svg);

// Add Function to Handle Events when Button Clicked
function buttonClick() {
  const xInput = document.getElementById("X");
  const yInput = document.getElementById("Y");
  
  // Get X and Y Values from Input Fields
  const x = xInput.value;
  const y = yInput.value;

  // Confirm that Only Coordinates 0-9 are Inputted
  if (x < 0 || x > 9 || y < 0 || y > 9) {
    return;
  }

  // Create New Circle Element for the Coordinates Inputted
  const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  circle.setAttribute("cx", (x / 10) * width);
  circle.setAttribute("cy", height - (y / 10) * height);
  
 // Add Mouse Enter Event Listener to Add Highlighted Class to Circle
  circle.addEventListener("mouseenter", () => {
  circle.classList.add("highlighted");
});

  // Add Mouse Enter Event Listener to Remove Highlighted Class to Circle
  circle.addEventListener("mouseleave", () => {
  circle.classList.remove("highlighted");
});

  // Add Click Event Listener to the New Point
  circle.addEventListener("click", function() {
    updateLastClickedText(x, y);
    if (circle.classList.contains("clicked")) {
      circle.classList.remove("clicked");
    } else {
      circle.classList.add("clicked");
    }
  });
  
  // Add the New Point to the SVG Container
  svg.appendChild(circle);
}
