document.addEventListener("DOMContentLoaded", () => {
    mainFunctionality();
});

const mainFunctionality = () => {
    const mobileNavBtn = document.getElementById("menu-btn");
    const navDropDown = document.getElementById("navigation");
    const signUpButton = document.getElementById("sign-up-button");

    const showForm = document.getElementById("form-section");
    const registerForm = document.getElementById("registration-form");
    const loginForm = document.getElementById("login-form");

    const cancelFormBtn = document.getElementById("cancel-button");
    const cancelLoginBtn = document.getElementById("cancel-button-login");

    const loginLink = document.getElementById("login-link");
    const registrationLink = document.getElementById("registration-link");

    // Separate input fields for registration
    const registerUserInputName = document.getElementById("register-user-name-input");
    const registerUserInputPassword = document.getElementById("register-password");
    const registerUserInputEmail = document.getElementById("register-email-input");
    const adminClientSelectElement = document.getElementById("form-users-choice");

    // Separate input fields for login
    const loginUserInputName = document.getElementById("login-user-name-input");
    const loginUserInputPassword = document.getElementById("login-password");
    const loginUserEmail = document.getElementById("login-email-input");

    const customerNewsLetterSignUp = document.getElementById("sign-up-newsletter-form");
    const administratorsCreatedNewsLetter = document.getElementById("create-newsletter-form");

    // Toggle mobile navigation
    mobileNavBtn.addEventListener("click", () => {
        navDropDown.classList.toggle("navigation-primary--right-position-transitions");
    });

    // Toggle between login and registration forms
    const toggleForms = (formType) => {
        showForm.classList.add("display-show");
        showForm.classList.remove("display-hidden");

        if (formType === "register") {
            loginForm.classList.add("display-hidden");
            registerForm.classList.remove("display-hidden");
        } else if (formType === "login") {
            registerForm.classList.add("display-hidden");
            loginForm.classList.remove("display-hidden");
        }
    };

    // Attach event listeners to toggle form visibility
    signUpButton.addEventListener("click", () => {
        registerForm.reset();
        toggleForms("register")
    });

    loginLink.addEventListener("click", () => {
        toggleForms("login");
        loginForm.reset();
    });
    
    registrationLink.addEventListener("click", () => {
        registerForm.reset();
        toggleForms("register");
    });

    // Handle registration form submission
    registerForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const userName = registerUserInputName.value.trim();
        const userPassword = registerUserInputPassword.value.trim();
        const userEmail = registerUserInputEmail.value.trim();
        const usersChoice = adminClientSelectElement.value;

        handleRegistration(userName, userPassword, userEmail, usersChoice);
        registerForm.reset(); // Clear the form after submission
    });

    // Handle login form submission
    loginForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const userName = loginUserInputName.value.trim();
        const userPassword = loginUserInputPassword.value.trim();
        const userEmail = loginUserEmail.value.trim();

        handleLogin(userPassword, userEmail);
        loginForm.reset(); // Clear the form after submission
    });

    // Hide the forms
    const hideForms = () => {
        showForm.classList.add("display-hidden");
        showForm.classList.remove("display-show");
    };

    // Attach cancel buttons to hide forms
    cancelFormBtn.addEventListener("click", hideForms);
    cancelLoginBtn.addEventListener("click", hideForms);

    // Handle registration logic
    const handleRegistration = (name, password, email, choice) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!name || !password || !email || !choice) {
            alert("All fields must be filled in.");
            return;
        }

        if (password.length < 4 || password.length > 10) {
            alert("Password must be 4-10 characters long.");
            return;
        }

        if (!emailRegex.test(email)) {
            alert("Please enter a valid email.");
            return;
        }

        alert(`You are registered as the ${choice}`);

        // Toggle newsletter visibility based on user choice
        if (choice.toLowerCase() === "administrator") {
            customerNewsLetterSignUp.classList.add("display-hidden");
            administratorsCreatedNewsLetter.classList.remove("display-hidden");
        } else if (choice.toLowerCase() === "customer") {
            customerNewsLetterSignUp.classList.remove("display-hidden");
            administratorsCreatedNewsLetter.classList.add("display-hidden");
        }
    };

    // Handle login logic
    const handleLogin = (password, email) => {
        if (!password || !email) {
            alert("Please fill in both fields.");
            return;
        }

        if (password.length < 4 || password.length > 10) {
            alert("Password must be 4-10 characters long.");
            return;
        }

        alert("Login successful");
        // Additional login logic can go here
    };
};
