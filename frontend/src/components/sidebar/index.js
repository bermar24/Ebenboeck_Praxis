fetch('../components/sidebar/sidebar.html')
    .then(response => response.text())
    .then(data => document.getElementById('sidebar').innerHTML = data)
    .catch(error => console.error('Error loading sidebar:', error));

// <!--function for scrol up-->
// function backToTop() {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
// }

