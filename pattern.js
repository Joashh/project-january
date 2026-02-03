const sections = document.querySelectorAll('.bg-switch');

function updateBgByTheme() {
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';

  sections.forEach((section) => {
    
    if (section.id === 'section6') {
      section.style.backgroundImage = isDark
        ? "url('images/bgpat3dark.png')"
        : "url('images/bgpat3.png')";
    } else if (section.id === 'section4') {
      section.style.backgroundImage = isDark
        ? "url('images/bgpat3dark.png')"
        : "url('images/bgpat3.png')";
    }
    else if (section.id === 'footer') {
      section.style.backgroundImage = isDark
        ? "url('images/bgpat3dark.png')"
        : "url('images/bgpat3.png')";
    }
    
  });
}


updateBgByTheme();


window.updateBgByTheme = updateBgByTheme;
