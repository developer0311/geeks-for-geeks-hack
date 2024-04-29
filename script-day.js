

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

const copyButtonC = document.querySelector(".copy-btn-c");
const code_C = document.querySelector("#code-c");
copyButtonC.addEventListener("click", () => {
    const textarea = document.createElement("textarea");
    textarea.value = code_C.innerText;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
});

const copyButtonJava = document.querySelector(".copy-btn-java");
const code_Java = document.querySelector("#code-java");
copyButtonJava.addEventListener("click", () => {
    const textarea = document.createElement("textarea");
    textarea.value = code_Java.innerText;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
});

const copyButtonPython = document.querySelector(".copy-btn-python");
const code_Python = document.querySelector("#code-python");
copyButtonPython.addEventListener("click", () => {
    const textarea = document.createElement("textarea");
    textarea.value = code_Python.innerText;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
});

const copyButtonJavaScript = document.querySelector(".copy-btn-js");
const code_JavaScript = document.querySelector("#code-js");
copyButtonJavaScript.addEventListener("click", () => {
    const textarea = document.createElement("textarea");
    textarea.value = code_JavaScript.innerText;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
});



// automatic copyright year
const year = document.querySelector("#year");
let currentYear = new Date().getFullYear();
year.innerText = currentYear;



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
