// External Javascript File HW-04

// Sets Parameters of the Sector Where Points are Placed
const height = 500;
const width = 500;

// Declares Variables of Given Initial Points
let initialPoints = [[1, 2], [2, 4], [6, 2], [9, 9]];
let initialSVG = document.getElementById("svg");

// Creates a New Circle Element in the SVG, Assigns to Circle Constant Variable
function addPoint(x, y) {
  const circle = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "circle"
  );

  // Styles the Circle Constant Variable for Initial and Added Points
  circle.setAttribute("r", 6);
  circle.setAttribute("fill", "black");
  circle.setAttribute("class", "circle");
  circle.setAttribute("cx", x * 50);
  circle.setAttribute("cy", height - (y * 50));

 // When Mouse Hovers Over Circle, Circle Highlights
  circle.addEventListener("mouseenter", () => {
    circle.setAttribute("fill", "pink");
  });
  
 // When Mouse Leaves Circle, Circle Removes Highlight
  circle.addEventListener("mouseleave", () => {
    circle.setAttribute("fill", "black");
  });

// Adds Events to Circle When Clicked on Circle Variable
 circle.addEventListener("click", () => {
   // Last Point Clicked Updates
   document.getElementById("last-click").innerHTML = "Last Point Clicked: (" + x + " , " + y + ")";
   
   // Adds Border to Circle When Clicked
   if (circle.getAttribute("stroke")) {
   	   circle.removeAttribute("stroke");
   } else {
   	   circle.setAttribute("stroke", "limegreen");
   	   circle.setAttribute("stroke-width", 4);
   }
  });
 return circle;
 }


initialPoints.forEach(allPoints => {
  initialSVG.appendChild(addPoint(allPoints[0], allPoints[1]));
})

function buttonClick() {
  let x = document.getElementById("X").value;
  let y = document.getElementById("Y").value;
  initialSVG.appendChild(addPoint(x, y));
}