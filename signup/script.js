const form = document.getElementById("signupForm");
form.addEventListener("submit", function (e) {
  e.preventDefault();

  // Clear previous errors
  document.getElementById("fullnameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("phoneError").textContent = "";
  document.getElementById("passwordError").textContent = "";
  document.getElementById("confirmPasswordError").textContent = "";

  let valid = true;

  // Full Name validation
  const fullname = form.fullname.value.trim();
  if (fullname.length < 2) {
    document.getElementById("fullnameError").textContent =
      "Please enter your full name.";
    valid = false;
  }

  // Email validation
  const email = form.email.value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    document.getElementById("emailError").textContent =
      "Please enter a valid email address.";
    valid = false;
  }

  // Phone validation (Nepal: 10 digits, starts with 98/97/96)
  const phone = form.phone.value.trim();
  const phonePattern = /^(98|97|96)[0-9]{8}$/;
  if (!phonePattern.test(phone)) {
    document.getElementById("phoneError").textContent =
      "Enter a valid 10-digit Nepali mobile number.";
    valid = false;
  }

  // Password validation
  const password = form.password.value;
  if (password.length < 6) {
    document.getElementById("passwordError").textContent =
      "Password must be at least 6 characters.";
    valid = false;
  }

  // Confirm Password validation
  const confirmPassword = form.confirmPassword.value;
  if (password !== confirmPassword) {
    document.getElementById("confirmPasswordError").textContent =
      "Passwords do not match.";
    valid = false;
  }

  if (valid) {
    alert("Sign up successful! (Demo only)");
    form.reset();
    // Reset eye icons to closed after form reset
    document
      .querySelectorAll(".toggle-password-btn img")
      .forEach((img) => {
        img.src = "../images/eyeclosed.png";
      });
    document.getElementById("password").type = "password";
    document.getElementById("confirmPassword").type = "password";
  }
});

// Password visibility toggle
document.querySelectorAll(".toggle-password-btn").forEach((btn) => {
  btn.addEventListener("click", function () {
    const targetId = btn.getAttribute("data-target");
    const input = document.getElementById(targetId);
    const img = btn.querySelector("img");
    if (input.type === "password") {
      input.type = "text";
      img.src = "../images/eyeopen.png";
    } else {
      input.type = "password";
      img.src = "../images/eyeclosed.png";
    }
  });
});