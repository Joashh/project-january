// gallery.js

const galleryImages = [
    "images/street/1.jpg",
    "images/street/2.jpg",
    "images/street/3.jpg",
    "images/street/4.jpg",
    "images/street/5.jpg",
    "images/street/6.jpg",
    "images/street/7.jpg",
    "images/street/8.jpg",
    "images/street/9.jpg",
    "images/street/10.jpg",
    "images/street/11.jpg",
    "images/street/13.jpg",
    "images/street/14.jpg",
    "images/street/15.jpg",
    "images/street/16.jpg",
    "images/street/17.jpg",
    "images/street/18.jpg",
    "images/street/19.jpg",
    "images/street/20.jpg"
];


function generateGallery() {
    const container = document.getElementById('gallery-container');

    galleryImages.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = "Gallery Image";
        img.className = "w-full mb-4 rounded-lg break-inside cursor-pointer transition-transform duration-300 hover:scale-105";
        img.loading = "lazy";

        // Add click listener for modal
        img.addEventListener('click', () => openModal(src));

        container.appendChild(img);
    });
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
    generateGallery();
});
