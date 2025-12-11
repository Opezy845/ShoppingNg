






//  let passwordInput = document.getElementById("password");
//         let confirmPasswordInput = document.getElementById("confirmPassword");
//         let confirmMessage = document.getElementById("confirmMessage");
        
//         // Rules
//         let ruleLength = document.getElementById("ruleLength");
//         let ruleUpper = document.getElementById("ruleUpper");
//         let ruleLower = document.getElementById("ruleLower");
//         let ruleNumber = document.getElementById("ruleNumber");
//         let ruleSpecial = document.getElementById("ruleSpecial");
        
//         // Listen while typing
//         passwordInput.addEventListener("input", checkPasswordRules);
//         confirmPasswordInput.addEventListener("input", checkPasswordRules);
        
//         function checkPasswordRules() {
//             let password = passwordInput.value;
//             let confirmPassword = confirmPasswordInput.value;
            
//             // Check rules
//             updateRule(ruleLength, password.length >= 8, "✓ Minimum 8 characters", "✖ Minimum 8 characters");
//             updateRule(ruleUpper, /[A-Z]/.test(password), "✓ At least one uppercase letter", "✖ At least one uppercase letter");
//             updateRule(ruleLower, /[a-z]/.test(password), "✓ At least one lowercase letter", "✖ At least one lowercase letter");
//             updateRule(ruleNumber, /[0-9]/.test(password), "✓ At least one number", "✖ At least one number");
//             updateRule(ruleSpecial, /[!@#$%^&*]/.test(password), "✓ At least one special character (!@#$%^&*)", "✖ At least one special character (!@#$%^&*)");
            
//             // Confirm password
//             confirmMessage.className = "";
//             if (confirmPassword === "") {
//                 confirmMessage.textContent = "";
//             } else if (password === confirmPassword) {
//                 confirmMessage.textContent = "Passwords match ✓";
//                 confirmMessage.className = "success";
//             } else {
//                 confirmMessage.textContent = "Passwords do not match ✖";
//                 confirmMessage.className = "error";
//             }
//         }
        
//         function updateRule(element, isValid, validText, invalidText) {
//             element.textContent = isValid ? validText : invalidText;
//             element.className = isValid ? "valid" : "invalid";
//         }

//         // Form submission handler
//         document.getElementById("registerForm").addEventListener("submit", function(e) {
//             e.preventDefault();
            
//             const submitBtn = e.target.querySelector('button[type="submit"]');
//             const registerMessage = document.getElementById("registerMessage");
            
//             // Add loading state
//             submitBtn.classList.add("loading");
//             submitBtn.disabled = true;
            
//             // Simulate registration process
//             setTimeout(() => {
//                 submitBtn.classList.remove("loading");
//                 submitBtn.disabled = false;
                
//                 registerMessage.textContent = "Registration successful! Welcome aboard! 🎉";
//                 registerMessage.className = "success";
                
//                 // Reset form after success
//                 setTimeout(() => {
//                     registerMessage.textContent = "";
//                     registerMessage.className = "";
//                 }, 3000);
//             }, 2000);
//         });




