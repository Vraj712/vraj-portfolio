/* script.js - Final Version */

// 1. ANIMATION LOOP (Typewriter)
const textElement = document.getElementById('typing-text');
const texts = ["Computer Engineer", "Web Developer", "Creative Coder"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
    if (count === texts.length) { count = 0; }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);
    if(textElement) textElement.textContent = letter;
    if (letter.length === currentText.length) {
        count++;
        index = 0;
        setTimeout(type, 2000); 
    } else {
        setTimeout(type, 100);
    }
})();

// 2. SCROLL REVEAL
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
});
document.querySelectorAll('.scroll-reveal').forEach((el) => observer.observe(el));

// 3. LOADER LOGIC
window.addEventListener("load", function () {
    const loader = document.getElementById("preloader");
    const percentText = document.querySelector(".loading-percent");
    const barFill = document.querySelector(".loader-bar-fill");
    let loadCount = 0;
    
    const interval = setInterval(() => {
        loadCount++;
        if(percentText) percentText.textContent = loadCount;
        if(barFill) barFill.style.width = loadCount + "%";
        if(loadCount === 100) {
            clearInterval(interval);
            setTimeout(() => { loader.classList.add("loader-hidden"); }, 500);
        }
    }, 20);
});

/* 4 In your main script.js */

function downloadPDF() {
    const btn = document.getElementById('downloadBtn');
    
    // Feedback
    btn.innerHTML = "<span>OPENING RESUME...</span>";
    
    setTimeout(() => {
        // OPEN THE NEW FILE IN A NEW TAB
        window.open('resume.html', '_blank');
        
        // Reset Button
        btn.innerHTML = "INITIALIZE_CV_DOWNLOAD"; 
    }, 500);
}