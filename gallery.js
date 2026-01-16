

function generateGallery(containerId, folder, totalImages) {
    const container = document.getElementById(containerId);
    if (!container) return;

    for (let i = 1; i <= totalImages; i++) {
        const thumb = `images/${folder}/thumbs/${i}.webp`;
        const full = `images/${folder}/watermarked/${i}.jpg`;

        const img = document.createElement('img');
        img.src = thumb;
        img.dataset.full = full;
        img.alt = `${folder} image`;
        img.loading = "lazy";
        img.className =
            "w-full mb-4 rounded-lg break-inside cursor-pointer transition-transform duration-500 ease-out opacity-0 scale-90 hover:scale-105";


        img.addEventListener('click', () => openModal(full));
        container.appendChild(img);
    }
}


function animateOnScroll() {
    const galleryImages = document.querySelectorAll('#gallery-portrait img, #gallery-development img, #gallery-documentary img, #gallery-travel img');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.remove('opacity-0', 'scale-90');
                entry.target.classList.add('opacity-100', 'scale-100');
                observer.unobserve(entry.target); // animate only once
            }
        });
    }, { threshold: 0.3 }); // trigger when 30% of image is visible

    galleryImages.forEach(img => observer.observe(img));
}
function createModal() {
    const modal = document.createElement('div');
    modal.id = 'image-modal';
    modal.className = `
        fixed inset-0 bg-black flex items-center justify-center z-50
        hidden opacity-0 transition-opacity duration-200
    `;
    modal.innerHTML = `
        <span id="modal-close" class="absolute top-5 right-5 text-white text-3xl cursor-pointer">&times;</span>
        <img id="modal-img" class="max-h-[90vh] max-w-[90vw] rounded-lg shadow-lg" src="" alt="Modal Image">
    `;
    document.body.appendChild(modal);

    // Close modal on click
    modal.addEventListener('click', (e) => {
        if (e.target.id === 'modal-close' || e.target.id === 'image-modal') {
            // Fade out background
            modal.classList.remove('opacity-100');
            modal.classList.add('opacity-0');
            setTimeout(() => modal.classList.add('hidden'), 300); // hide after fade
        }
    });
}

function openModal(src) {
    const modal = document.getElementById('image-modal');
    const modalImg = document.getElementById('modal-img');

    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');

        canvas.width = img.width;
        canvas.height = img.height;

        // Draw image
        ctx.drawImage(img, 0, 0);

        // Draw watermark
        ctx.font = `${canvas.width / 15}px Arial`;
        ctx.fillStyle = "rgba(255,255,255,0.2)";
        ctx.textAlign = "center";
        ctx.textBaseline = "bottom";
        ctx.rotate(-Math.PI / 6);
        ctx.fillText("© Al Benavente", canvas.width / 2, canvas.height / 1);

        modalImg.src = canvas.toDataURL("image/jpeg", 0.9);

        // Step 1: remove hidden
        modal.classList.remove('hidden');

        // Step 2: force reflow so the browser registers the opacity-0 state
        void modal.offsetWidth; // this forces a reflow

        // Step 3: then add opacity-100 to trigger transition
        modal.classList.add('opacity-100');
    };

    img.src = src;
}



document.addEventListener('DOMContentLoaded', () => {
    createModal();

    generateGallery('gallery-portrait', 'portrait', 15);
    generateGallery('gallery-development', 'development', 12);
    generateGallery('gallery-documentary', 'documentary', 4);
    generateGallery('gallery-travel', 'street', 19);
     animateOnScroll();
});
document.addEventListener('dragstart', (e) => {
    if (e.target.tagName === 'IMG') {
        e.preventDefault();
    }
});
document.addEventListener('contextmenu', (e) => {
    if (e.target.tagName === 'IMG') {
        e.preventDefault();
    }
});


