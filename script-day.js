

// dark and light mode script
let themeLink = document.querySelector("#theme");
let modeButton = document.querySelector("#mode");
className = "bx"

modeButton.addEventListener("click", (e) => {

    let currentTheme = themeLink.getAttribute("href");

    if (currentTheme === "style-day.css") {
        modeButton.className ="bx bxs-moon";
        themeLink.setAttribute("href", "style-day-1.css");
    }
    else {
        modeButton.className ="bx bxs-sun";
        themeLink.setAttribute("href", "style-day.css");
    }
})


// Get all copy buttons
const copyButtons = document.querySelectorAll(".copy-btn");

// Function to fade copy buttons
copyButtons.forEach((button) => {
    button.addEventListener("click", (e)=>{
        button.style.opacity = "0.3"; // Set opacity to 30%
    });
});


// automatic copyright year

const year = document.querySelector("#year");
let currentYear = new Date().getFullYear();
year.innerText = currentYear;


// copy to clipboard code
var clipboard = new ClipboardJS('.copy-btn');
clipboard.on('success', function (e) {
    console.log('Copied!');
    e.clearSelection();
});


// Scroll reveal
ScrollReveal({
    reset: false,
    distance: "60px",
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.problem-name', {origin: `top`});
// ScrollReveal().reveal('.copy-btn', {origin: `bottom`});
ScrollReveal().reveal('.answer h3', {origin: `left`});
ScrollReveal().reveal('pre', {origin: `right`});
