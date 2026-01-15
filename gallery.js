

function generateGallery(containerId, folder, totalImages) {
    const container = document.getElementById(containerId);
    if (!container) return;

    for (let i = 1; i <= totalImages; i++) {
        const thumb = `images/${folder}/thumbs/${i}.webp`;
        const full = `images/${folder}/full/${i}.jpg`;

        const img = document.createElement('img');
        img.src = thumb;
        img.dataset.full = full;
        img.alt = `${folder} image`;
        img.loading = "lazy";
        img.className =
            "w-full mb-4 rounded-lg break-inside cursor-pointer transition-transform duration-300 hover:scale-105";

        img.addEventListener('click', () => openModal(full));
        container.appendChild(img);
    }
}


// Modal creation
function createModal() {
    const modal = document.createElement('div');
    modal.id = 'image-modal';
    modal.className = "fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 hidden";
    modal.innerHTML = `
        <span id="modal-close" class="absolute top-5 right-5 text-white text-3xl cursor-pointer">&times;</span>
        <img id="modal-img" class="max-h-[90vh] max-w-[90vw] rounded-lg shadow-lg" src="" alt="Modal Image">
    `;
    document.body.appendChild(modal);

    // Close modal on click
    modal.addEventListener('click', (e) => {
        if (e.target.id === 'image-modal' || e.target.id === 'modal-close') {
            modal.classList.add('hidden');
        }
    });
}

function openModal(src) {
    const modal = document.getElementById('image-modal');
    const modalImg = document.getElementById('modal-img');
    modalImg.src = src;
    modal.classList.remove('hidden');
}

document.addEventListener('DOMContentLoaded', () => {
    createModal();

    generateGallery('gallery-portrait', 'portrait', 15);
    generateGallery('gallery-development', 'development', 12);
    generateGallery('gallery-documentary', 'documentary', 4);
    generateGallery('gallery-travel', 'street', 19);
});

