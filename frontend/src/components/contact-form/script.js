document.addEventListener("DOMContentLoaded", function () {
  emailjs.init("KYvTiugVURnv9nUWu"); // my EmailJS public key

  document
    .getElementById("messageForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      const formData = {
        name: document.getElementById("name").value,
        from_email: document.getElementById("email").value,
        to_email: "fjkun06@gmail.com",
        message: document.getElementById("message").value
      };
      console.log("====================================");
      console.log(formData);
      console.log("====================================");
      emailjs
        .send("service_qo4mv24", "template_h0rwhar", formData)
        .then((_) => {
          alert("Email sent successfully!");
          document.getElementById("messageForm").reset(); // Clear form
        })
        .catch((error) => {
          alert("Failed to send email.");
          console.error(error);
        });
    });
});
