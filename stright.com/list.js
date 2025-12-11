let close = document.getElementById("close");
let registerMessage = document.getElementById("registerMessage");

let fullNameInput = document.getElementById("fullNameInput");
let emailInput = document.getElementById("emailInput");
let usernameInput = document.getElementById("usernameInput");
let passwordInput = document.getElementById("passwordInput");
let confirmPasswordInput = document.getElementById("confirmPassword");
let confirmMessage = document.getElementById("confirmMessage");

// Password rules list
let passwordRules = {
  length: document.getElementById("ruleLength"),
  upper: document.getElementById("ruleUpper"),
  lower: document.getElementById("ruleLower"),
  number: document.getElementById("ruleNumber"),
  special: document.getElementById("ruleSpecial"),
};

// Validate password while typing
passwordInput.addEventListener("input", () => {
  let value = passwordInput.value;

  let rules = {
    length: value.length >= 8,
    upper: /[A-Z]/.test(value),
    lower: /[a-z]/.test(value),
    number: /[0-9]/.test(value),
    special: /[!@#$%]/.test(value),
  };

  for (let key in rules) {
    if (rules[key]) {
      passwordRules[key].classList.add("valid");
      passwordRules[key].classList.remove("invalid");
      passwordRules[key].textContent = "✔ " + passwordRules[key].textContent.replace("✖ ", "").replace("✔ ", "");
    } else {
      passwordRules[key].classList.add("invalid");
      passwordRules[key].classList.remove("valid");
      passwordRules[key].textContent = "✖ " + passwordRules[key].textContent.replace("✔ ", "").replace("✖ ", "");
    }
  }
});

// Confirm password live check
confirmPasswordInput.addEventListener("input", () => {
  if (confirmPasswordInput.value === passwordInput.value) {
    confirmMessage.textContent = "✅ Passwords match";
    confirmMessage.style.color = "green";
  } else {
    confirmMessage.textContent = "❌ Passwords do not match";
    confirmMessage.style.color = "red";
  }
});

  close.addEventListener("submit", function(e){
    e.preventDefault();
  })

// Form submit
close.addEventListener("submit", function(e) {
  e.preventDefault();

  let fullName = fullNameInput.value.trim();
  let email = emailInput.value.trim();
  let username = usernameInput.value.trim();
  let password = passwordInput.value;
  let confirmPassword = confirmPasswordInput.value;

  
  // Check confirm password
  if (password !== confirmPassword) {
    registerMessage.textContent = "❌Passwords do not match!";
    registerMessage.className = "error";
    registerMessage.style.color = "red;"
    return;
  }

  // Check password rules (all must be valid)
  let allValid = Object.values(passwordRules).every(rule => rule.classList.contains("valid"));
  if (!allValid) {
    registerMessage.textContent = "Password does not meet requirements!";
    registerMessage.className = "error";
    return;
  }

  // Get users from localStorage
  let users = JSON.parse(localStorage.getItem("users")) || [];


  // Check if email/username exists
  let userExists = users.some(u => u.email === email || u.username === username);
  if (userExists) {
    registerMessage.textContent = "Email or Username already exists!";
    registerMessage.className = "error";
    return;
  }

  // Save new user
  let newUser = { fullName, email, username, password };
  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));

  // Save current session
  localStorage.setItem("loggedInUser", JSON.stringify(newUser));


  registerMessage.textContent = "🎉 Registration successful!";
  registerMessage.className = "success";

  // Reset form
  close.reset();
  confirmMessage.textContent = "";
  Object.values(passwordRules).forEach(rule => {
    rule.classList.remove("valid", "invalid");
    rule.textContent = "✖ " + rule.textContent.replace("✔ ", "").replace("✖ ", "");
  });
});