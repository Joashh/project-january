const wallpaperDiv = document.getElementById('wallpaper-bg');

const wallpapers = [
  'images/wallpaper/webp/1.webp',
  'images/wallpaper/webp/2.webp',
  'images/wallpaper/webp/3.webp',
  'images/wallpaper/webp/4.webp',
  'images/wallpaper/webp/5.webp'
];

let current = 1;

function changeWallpaper() {
  wallpaperDiv.style.opacity = 0;

  setTimeout(() => {
    wallpaperDiv.style.backgroundImage = `url('${wallpapers[current]}')`;
    wallpaperDiv.style.opacity = 1;
    current = (current + 1) % wallpapers.length;
  }, 500);
}

// initial wallpaper
wallpaperDiv.style.backgroundImage = `url('${wallpapers[0]}')`;
wallpaperDiv.style.opacity = 1;

setInterval(changeWallpaper, 6000);
