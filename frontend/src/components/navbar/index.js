//adding navbar and css styles dynamically
fetch("../components/layout/layout.html")
  .then((response) => response.text())
  .then((data) => (document.querySelector("head").innerHTML += data))
  .catch((error) => console.error("Error loading navbar:", error));

fetch("../components/navbar/navbar.html")
  .then((response) => response.text())
  .then((data) => (document.querySelector("header").innerHTML = data))
  .catch((error) => console.error("Error loading navbar:", error));

function showMenubar() {
  const menubar = document.querySelector(".menubar");
  menubar.style.display = "flex";
  //   menubar.classList.toggle("slide-in");
}
function closeMenubar() {
  const menubar = document.querySelector(".menubar");
  menubar.style.display = "none";
  //   menubar.classList.toggle("slide-in");
}
