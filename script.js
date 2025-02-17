document.querySelector(".contact-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    const name = document.querySelector(".contact-form input[type='text']").value;
    const email = document.querySelector(".contact-form input[type='email']").value;
    const message = document.querySelector(".contact-form textarea").value;

    // Create a new element to display the submitted data
    const resultDiv = document.createElement("div");
    resultDiv.classList.add("submission-result");
    resultDiv.innerHTML = `
      <h2>Thank you for contacting me!</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong> ${message}</p>
    `;

    // Append the result to the contact section
    const contactSection = document.getElementById("contact");
    contactSection.appendChild(resultDiv);

    // Clear the form
    document.querySelector(".contact-form").reset();
});