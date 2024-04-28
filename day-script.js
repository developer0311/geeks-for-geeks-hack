// Get all copy buttons
const copyButtons = document.querySelectorAll(".copy-btn");

// Function to fade copy buttons
copyButtons.forEach((button) => {
    button.addEventListener("click", (e)=>{
        button.style.opacity = "0.3"; // Set opacity to 30%
    });
});



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
