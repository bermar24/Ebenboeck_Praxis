//adding navbar and css styles dynamically
fetch("../components/layout/layout.html")
  .then((response) => response.text())
  .then((data) => {
    document.querySelector("head").innerHTML += data;
  })
  .catch((error) => console.error("Error loading navbar:", error));

fetch("../components/navbar/navbar.html")
  .then((response) => response.text())
  .then((data) => (document.querySelector("header").innerHTML = data))
  .then(() =>
    document.addEventListener("DOMContentLoaded", () => {
      // Get the current pathname (e.g., '/index.html')
      const currentPath = window.location.pathname;
      console.log("====================================");
      console.log(currentPath);
      console.log("====================================");

      // Select all links in the menu
      const navLinks = document.querySelectorAll("nav a");
      console.log("====================================");
      console.log(navLinks);
      console.log("====================================");
      // Loop through each link and compare its pathname with the current path
      navLinks.forEach((link) => {
        console.log("====================================");
        console.log(link.pathname === currentPath);
        console.log("====================================");
        if (link.pathname === currentPath) {
          link.classList.add("active");
        }
      });
    })
  )
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
