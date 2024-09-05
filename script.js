
document.addEventListener("DOMContentLoaded", () => {
    mainFunctionality();
})

const mainFunctionality = () => {
    const mobileNavBtn = document.getElementById("menu-btn");
    const navDropDown = document.getElementById("navigation");
    
    // listening to scroll events changing color of navbar
    document.addEventListener("scroll", () => {
        const navBar = document.getElementById("nav-bar");
        
        // .getBoundingClientReact().top means which section is currently at the top of the viewport
        const ourHeroSection = document.getElementById("hero-section").getBoundingClientRect().top;
        const ourStorySection = document.getElementById("our-story").getBoundingClientRect().top;

        const mainNavLinks = document.getElementById("main__nav-link-item").getBoundingClientRect().top;
        const mainNavUnorderedList = document.getElementById("main-nav__ul").getBoundingClientRect.top;

        // if ourStory is at the top which is 0 of the browser then update background color
        if (ourHeroSection <= 0) {
            navBar.style.backgroundColor = "hsla(0, 0%, 0%, 0)";
            
        }

        if (ourStorySection <= 0) {
            navBar.style.backgroundColor = "black";
             
        }
    });
    
    // toggling navigations while mobile view
    mobileNavBtn.addEventListener("click", () => {
        navDropDown.classList.toggle("navigation-primary--right-position-transitions");
    });
}



