const text = "I am a Photographer";
const element = document.getElementById("typewriter");
let i = 0;
let cursorVisible = true;
let hasTyped = false; // Ensure it runs only once

// Cursor blinking
function blinkCursor() {
    const cursor = element.querySelector('.typewriter-cursor');
    if (cursor) {
        cursorVisible = !cursorVisible;
        cursor.style.opacity = cursorVisible ? '1' : '0';
    }
}

// Typewriter function
function typeWriter() {
    if (i < text.length) {
        // Remove any existing cursor
        const cursor = element.querySelector('.typewriter-cursor');
        if (cursor) cursor.remove();
        
        // Add current character
        element.innerHTML += text.charAt(i);
        
        // Add blinking cursor
        const cursorSpan = document.createElement('span');
        cursorSpan.className = 'typewriter-cursor';
        cursorSpan.textContent = '|';
        cursorSpan.style.fontWeight = 'normal';
        cursorSpan.style.color = 'inherit';
        element.appendChild(cursorSpan);
        
        i++;
        setTimeout(typeWriter, 100); // typing speed
    } else {
        // Keep cursor blinking after typing
        setInterval(blinkCursor, 530);
    }
}

// Intersection Observer to detect when element enters viewport
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !hasTyped) {
            hasTyped = true;       // prevent multiple triggers
            element.innerHTML = ''; // clear content
            typeWriter();           // start typing
           
        }
    });
}, { threshold: 0.5 }); // 50% of element visible

if (element) observer.observe(element);
