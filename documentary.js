const documentaryAlbums = {
    batanes: { title: "Batanes", total: 10 },
    healers: { title: "Healers of the Island", total: 10 },
    sakada: { title: "Sakada", total: 7 }
};

const albumsContainer = document.getElementById("documentary-albums");
const view = document.getElementById("documentary-view");
const gallery = document.getElementById("doc-gallery");
const titleEl = document.getElementById("doc-title");
const backBtn = document.getElementById("doc-back");


// Render album cards
Object.entries(documentaryAlbums).forEach(([key, data]) => {
    const card = document.createElement("div");
    card.className = "album-cover group cursor-pointer opacity-50 transition-transform transition-opacity";

    card.innerHTML = `
  <div class="relative group overflow-hidden rounded-2xl shadow-md">
      <div class="relative w-full h-64 overflow-hidden">

      <img src="images/documentary/${key}/thumbs/1.webp"
           class="album-preview absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
           data-key="${key}"
           data-index="1">

      <img src="images/documentary/${key}/thumbs/2.webp"
           class="album-preview absolute inset-0 w-full h-full object-cover transition-transform duration-500 translate-x-full "
           data-key="${key}"
           data-index="2">

    </div>
    
    <!-- Left → Right Gradient Shadow -->
    <div class="absolute inset-0 bg-linear-to-r from-black/60 via-black/20 to-black/60"></div>

    <!-- Title -->
    <div class="absolute inset-0 flex items-end justify-between  p-5">
      <h3 class="text-xl font-semibold text-white tracking-wide drop-shadow-lg">
        ${data.title}
      </h3>

     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="text-white size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 6.878V6a2.25 2.25 0 0 1 2.25-2.25h7.5A2.25 2.25 0 0 1 18 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 0 0 4.5 9v.878m13.5-3A2.25 2.25 0 0 1 19.5 9v.878m0 0a2.246 2.246 0 0 0-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0 1 21 12v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6c0-.98.626-1.813 1.5-2.122" />
</svg>


    </div>
  </div>
`;

    card.onclick = () => openAlbum(key, data);
    albumsContainer.appendChild(card);
});



function animateAlbumsOnScroll() {
    const albums = document.querySelectorAll('#documentary-albums .album-cover');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Reveal animation
                entry.target.classList.remove('opacity-0', 'translate-y-6');
                entry.target.classList.add('opacity-100', 'translate-y-0');

                // Tiny pulse once
                entry.target.animate(
                    [
                        { transform: 'scale(1)' },
                        { transform: 'scale(1.05)' },
                        { transform: 'scale(1)' }
                    ],
                    { duration: 500, easing: 'ease-out' }
                );

                observer.unobserve(entry.target); // run once only
            }
        });
    }, { threshold: 0.2 });

    albums.forEach(album => observer.observe(album));
}

function addAlbumPreviewAnimation() {
    const cards = document.querySelectorAll('#documentary-albums .group');
    const animated = new Set();

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !animated.has(entry.target)) {
                animated.add(entry.target);

                const index = [...cards].indexOf(entry.target);
                const delay = index * 400; // 👈 0ms, 400ms, 800ms, ...

                const imgs = entry.target.querySelectorAll('.album-preview');
                const img1 = imgs[0];
                const img2 = imgs[1];

                setTimeout(() => {
                    // Slide 1 out, 2 in
                    img1.classList.add('-translate-x-full');
                    img2.classList.remove('translate-x-full');

                    // Slide back after a pause
                    setTimeout(() => {
                        img1.classList.remove('-translate-x-full');
                        img2.classList.add('translate-x-full');
                    }, 1200);
                }, delay + 300);
            }
        });
    }, { threshold: 0.4 });

    cards.forEach(card => observer.observe(card));
}




function openAlbum(key, data) {
    albumsContainer.classList.add("hidden");
    view.classList.remove("hidden");
    titleEl.textContent = data.title;
    gallery.innerHTML = "";

    for (let i = 1; i <= data.total; i++) {
        const img = document.createElement("img");
        img.src = `images/documentary/${key}/thumbs/${i}.webp`;
        img.loading = "lazy";
        img.className = "w-full mb-4 rounded-lg cursor-pointer hover:scale-105 transition";
        img.onclick = () =>
            openModal(`images/documentary/${key}/watermarked/${i}.jpg`);
        gallery.appendChild(img);
    }

    window.scrollTo({ top: titleEl.offsetTop - 100, behavior: "smooth" });
}

backBtn.onclick = () => {
    view.classList.add("hidden");
    albumsContainer.classList.remove("hidden");
};


animateAlbumsOnScroll();
addAlbumPreviewAnimation();