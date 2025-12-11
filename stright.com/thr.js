let loginForm = document.getElementById("loginForm");
let loginMessage = document.getElementById("loginMessage");

loginForm.addEventListener("submit", function(e) {
  e.preventDefault();

  let identifier = document.getElementById("loginIdentifier").value;
  let password = document.getElementById("loginPassword").value;

  let users = JSON.parse(localStorage.getItem("users")) || [];
  let user = users.find(u => (u.email === identifier || u.username === identifier) && u.password === password);

  if (user) {
    localStorage.setItem("loggedInUser", JSON.stringify(user));
    loginMessage.textContent = "Login successful!";
    loginMessage.style.color = "green";
    showDashboard();
  } else {
    loginMessage.textContent = "Invalid credentials!";
    loginMessage.style.color = "red";
  }
});
