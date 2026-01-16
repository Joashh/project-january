const sections = document.querySelectorAll('.bg-switch');

function updateBgByTheme() {
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';

  sections.forEach((section) => {
    // You can use different images per section
    if (section.id === 'section6') {
      section.style.backgroundImage = isDark
        ? "url('images/bgpat3dark.png')"
        : "url('images/bgpat3.png')";
    } else if (section.id === 'section4') {
      section.style.backgroundImage = isDark
        ? "url('images/bgpat3dark.png')"
        : "url('images/bgpat3.png')";
    }
  });
}

// Run on page load
updateBgByTheme();

// Expose for theme toggle
window.updateBgByTheme = updateBgByTheme;
