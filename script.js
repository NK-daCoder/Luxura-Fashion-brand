
document.addEventListener("DOMContentLoaded", () => {
    mainFunctionality();
})

const mainFunctionality = () => {
    const mobileNavBtn = document.getElementById("menu-btn");
    const navDropDown = document.getElementById("navigation");
    
    
    // toggling navigations while mobile view
    mobileNavBtn.addEventListener("click", () => {
        navDropDown.classList.toggle("navigation-primary--right-position-transitions");
    });
}



