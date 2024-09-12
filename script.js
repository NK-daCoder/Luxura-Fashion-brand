
document.addEventListener("DOMContentLoaded", () => {
    mainFunctionality();
})

const mainFunctionality = () => {
    const mobileNavBtn = document.getElementById("menu-btn");
    const navDropDown = document.getElementById("navigation");
    const signUpButton = document.getElementById("sign-up-button");

    // for login and register forms
    const showForm = document.getElementById("form-section");

    // registery forms
    const registerFrom = document.getElementById("registration-form");
    const loginForm =  document.getElementById("login-form");

    const cancleFormBtn = document.getElementById("cancle-button");
    const loginLink = document.getElementById("login-link")

    // getting users input on the forms
    const userInputName = document.getElementById("user-name-input");
    const userInputPassword = document.getElementById("password");
    const userInputEmail = document.getElementById("email-input");

    // select element
    const adminClientSelectElement = document.getElementById("form-users-choice");

    // toggling navigations while mobile view
    mobileNavBtn.addEventListener("click", () => {
        navDropDown.classList.toggle("navigation-primary--right-position-transitions");
    });


    // if the login button is clicked
    signUpButton.addEventListener("click", () => {
        showForm.classList.add("display-show");
        showForm.classList.remove("display-hidden");
        userInputName.value = "";
        userInputPassword.value = "";
        userInputEmail.value = "";
    });

    cancleFormBtn.addEventListener("click", () => {
        showForm.classList.add("display-hidden");
        showForm.classList.remove("display-show");
    });

    registerFrom.addEventListener("submit",  (event) => {
        // prevent form from submitting automatically if there are
        event.preventDefault();

        /*  regexEmail explanation

            + "^" and "$"" denote the start and end of the string, respectively

            + [^\s@]+ ensures that the local part (before the @) contains at least one character, that 
              is not a space or an @ symbol.

            + "@"" is the literal character.

            + [^\s@]+\.[^\s@]+ ensures the domain part contains a dot (.) separating the domain and TLD, 
              and it checks for valid characters on both sides of the dot.

        */

        // Regex for email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // always use .values when you want to listen to input from the user
        const userName = userInputName.value;
        const userPassword = userInputPassword.value;
        const userEmail = userInputEmail.value;
        const usersChoice = adminClientSelectElement.value;

        

        // TODO: check if all inputs are filled in
        if (!userName || !userPassword || !userEmail) {
            alert("All input fields must be filled in");
            return;
        }
       
        // TODO: check if userPassword is in range between 4 and 10
        if (userPassword.length < 4 || userPassword.length > 10) {
            alert("Your password must be 4-10 characters long");
            // Stop further execution if the password is invalid
            return;
        }

        // TODO: validating email via regex expression .test() returns true or false
        if (!emailRegex.test(userEmail)) {
            alert("Please enter a valid email address");
            return;
        }

        // TODO: validate if user is admin or a customer
        // Check if a value is selected
        if (usersChoice === "") {
            alert("Please Choose From the dropdown");
            return;
        } 
        else {
            const signupNewsletter = document.getElementById("sign-up-newsletter-form");
            const createNewLetterForm = document.getElementById("create-newsletter-form");

            // TODO: Update the UI According to what the user Registered as
            // if we are admin
            if (usersChoice.toLowerCase() === "administrator") {
                // something needs to happen on the homepage
                signupNewsletter.classList.add("display-hidden");
                createNewLetterForm.classList.remove("display-hidden");
                alert(`You are registered as the ${usersChoice}`);  
            }
            // if we are customer
            else {
                if (signupNewsletter.classList.contains("display-hidden")) {
                    signupNewsletter.classList.remove("display-hidden");
                    createNewLetterForm.classList.add("display-hidden");
                }
                alert(`You are registered as the ${usersChoice}`);
            }
        }

        alert("form is completed");
    });

    loginLink.addEventListener("click", () => {
        registerFrom.classList.add("display-hidden");
        loginForm.classList.remove("display-hidden");
    });

    loginForm.addEventListener("submit", (event) => {
        event.preventDefault();

    })
}




