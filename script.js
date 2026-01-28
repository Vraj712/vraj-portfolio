/* script.js */

/* script.js - Top Section */

/* script.js */

// 1. STUDIO LOADER LOGIC
window.addEventListener("load", function () {
    const loader = document.getElementById("preloader");
    const percentText = document.querySelector(".loading-percent");
    const barFill = document.querySelector(".loader-bar-fill");
    
    let loadCount = 0;
    
    // Simulate loading
    const interval = setInterval(() => {
        loadCount++;
        
        // Update the text
        if(percentText) percentText.textContent = loadCount;
        
        // Update the bar width
        if(barFill) barFill.style.width = loadCount + "%";
        
        if(loadCount === 100) {
            clearInterval(interval);
            
            // Wait a moment, then slide up
            setTimeout(() => {
                loader.classList.add("loader-hidden");
            }, 500); // 0.5s delay before opening
        }
    }, 20); // Speed of loading
});

// 2. TYPEWRITER EFFECT
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

// 3. SCROLL REVEAL
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
});
document.querySelectorAll('.scroll-reveal').forEach((el) => observer.observe(el));

// 4. TOAST NOTIFICATION
function showToast(message) {
    const toast = document.getElementById("toast");
    toast.textContent = message;
    toast.className = "toast show";
    setTimeout(function(){ toast.className = toast.className.replace("show", ""); }, 3000);
}

// 5. PDF DOWNLOADER
function downloadPDF() {
    const element = document.getElementById('resume-area');
    const btn = document.getElementById('downloadBtn');
    const originalText = btn.innerHTML;
    
    btn.innerHTML = "Generating...";
    
    const opt = {
      margin:       0,
      filename:     'Vraj_Panchal_CV.pdf',
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2, useCORS: true, scrollY: 0, backgroundColor: '#050505' },
      jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
  
    html2pdf().set(opt).from(element).save().then(() => {
        btn.innerHTML = originalText;
        showToast("Resume Downloaded Successfully!");
    }).catch(err => {
        console.error(err);
        btn.innerHTML = originalText;
        showToast("Error: Run on Local Server to fix!");
        alert("To fix image download errors, please use VS Code 'Live Server' extension.");
    });
}