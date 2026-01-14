// portrait.js

const portraits = [
    {
        img: 'images/portrait/1.jpg',
        title: 'Portrait 1',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        img: 'images/portrait/2.jpg',
        title: 'Portrait 2',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        img: 'images/portrait/3.jpg',
        title: 'Portrait 3',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        img: 'images/portrait/4.jpg',
        title: 'Portrait 4',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        img: 'images/portrait/5.jpg',
        title: 'Portrait 5',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        img: 'images/portrait/6.jpg',
        title: 'Portrait 6',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        img: 'images/portrait/7.jpg',
        title: 'Portrait 7',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        img: 'images/portrait/8.jpg',
        title: 'Portrait 8',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        img: 'images/portrait/9.jpg',
        title: 'Portrait 9',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        img: 'images/portrait/10.jpg',
        title: 'Portrait 10',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        img: 'images/portrait/11.jpg',
        title: 'Portrait 11',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        img: 'images/portrait/12.jpg',
        title: 'Portrait 12',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        img: 'images/portrait/13.jpg',
        title: 'Portrait 13',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        img: 'images/portrait/14.jpg',
        title: 'Portrait 14',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        img: 'images/portrait/15.jpg',
        title: 'Portrait 15',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        img: 'images/portrait/16.jpg',
        title: 'Portrait 16',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        img: 'images/portrait/17.jpg',
        title: 'Portrait 17',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },

];

function generatePortraits() {
    const container = document.getElementById('section5-cards');

    portraits.forEach(p => {
        const portrait = document.createElement('div');
        portrait.className = 'relative overflow-hidden rounded-md w-[220px] aspect-[3/4] mx-auto group';


        portrait.innerHTML = `
<img src="${p.img}" alt="${p.title}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            <div class="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-center p-4 ">
                <h3 class="text-white font-bold text-lg mb-2">${p.title}</h3>
                <p class="text-white text-sm">${p.desc}</p>
            </div>
        `;

        container.appendChild(portrait);
    });
}

document.addEventListener('DOMContentLoaded', generatePortraits);
