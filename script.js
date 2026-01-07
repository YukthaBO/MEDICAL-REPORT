// Save registered users in localStorage
document.addEventListener("DOMContentLoaded", () => {
  const registerForm = document.getElementById("registerForm");
  const loginForm = document.getElementById("loginForm");

  // Handle Registration
  if (registerForm) {
    registerForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const userid = document.getElementById("userid").value;
      const password = document.getElementById("password").value;

      // Save user credentials
      localStorage.setItem(userid, password);
      alert("Registration successful! Please login.");
      window.location.href = "login.html";
    });
  }

  // Handle Login
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const loginId = document.getElementById("loginId").value;
      const loginPassword = document.getElementById("loginPassword").value;

      const storedPassword = localStorage.getItem(loginId);

      if (storedPassword && storedPassword === loginPassword) {
        alert("Login Successful!");
        window.location.href = "https://yukthabo.github.io/AI-BASED-REPORT-ANALYZER/"; // change to your analyzer app page
      } else {
        alert("Invalid ID or Password. Please try again or register.");
      }
    });
  }
});