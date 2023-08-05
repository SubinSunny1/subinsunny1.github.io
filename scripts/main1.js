const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/cross.png") {
    myImage.setAttribute("src", "images/cross1.png");
  } else {
    myImage.setAttribute("src", "images/cross.png");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
   setUserName();
 } else {
  localStorage.setItem("name", myName);
  myHeading.textContent = `Cross is cool , ${myName}`;
 }
}

myButton.onclick = () => {
  setUserName();
};
