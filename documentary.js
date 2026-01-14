// documentary.js

const documentaries = [
    {
        img: 'images/documentary/1.jpg',
        title: 'Documentary 1',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        img: 'images/documentary/2.jpg',
        title: 'Documentary 2',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        img: 'images/documentary/3.jpg',
        title: 'Documentary 3',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        img: 'images/documentary/4.jpg',
        title: 'Documentary 4',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },

];

function generateDocumentaries() {
    const container = document.getElementById('section4-cards');

    documentaries.forEach(doc => {
        const card = document.createElement('div');

        card.className = `
    rounded-xl
    shadow-lg
    bg-white
    overflow-hidden
    transition-transform duration-300
    hover:scale-[1.02]
    cursor-grab
    active:cursor-grabbing
`;

        card.innerHTML = `
            <img src="${doc.img}" alt="${doc.title}" class="w-full h-64 md:h-80 object-cover " />
            <div class="p-6 dark:bg-gray-900 bg-white  transition-colors duration-500">
                <h3 class="text-xl text-black dark:text-white font-semibold mb-3">${doc.title}</h3>
                <p class="text-gray-600 dark:text-gray-300 text-sm leading-relaxed line-clamp-3">${doc.desc}</p>
            </div>
        `;

        container.appendChild(card);
    });

}

document.addEventListener('DOMContentLoaded', generateDocumentaries);


