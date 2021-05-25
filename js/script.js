var body = document.getElementById("body");
let colorArray = ["blue", "lightblue", "yellow", "green", "lightgreen", "indigo", "aqua", "brown", "black", "gray", "grey", "lightgrey", "orange"];
let changeBgColor = () => {
    body.style.backgroundColor = colorArray[Math.ceil(Math.random()*10)];
    console.log("test");
}