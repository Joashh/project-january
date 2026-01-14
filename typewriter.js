const text = "I am a Photographer";
const element = document.getElementById("typewriter");
let i = 0;
let cursorVisible = true;

// Add cursor blinking
function blinkCursor() {
    const cursor = document.querySelector('.typewriter-cursor');
    if (cursor) {
        cursorVisible = !cursorVisible;
        cursor.style.opacity = cursorVisible ? '1' : '0';
    }
}

// Start cursor blinking
const cursorInterval = setInterval(blinkCursor, 530); // Standard cursor blink speed

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
        setTimeout(typeWriter, 100); // Adjust typing speed
    } else {
        // When typing is complete, ensure cursor keeps blinking
        // Clear the interval and restart it for consistent blinking
        clearInterval(cursorInterval);
        setInterval(blinkCursor, 530);
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Clear element and start typing
    if (element) {
        element.innerHTML = '';
        typeWriter();
    }
});