const insertFooter = () =>
  fetch("/frontend/src/components/footer/footer.html")
    .then((response) => response.text())
    .then((data) => (document.getElementById("footer").innerHTML = data))
    .catch((error) => console.error("Error loading footer:", error));

    insertFooter();
