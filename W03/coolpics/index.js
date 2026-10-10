let coolSection = document.querySelector('.coolimg');
let modal = document.querySelector('dialog');
let modalImg = modal.querySelector('img');
const closeButton = modal.querySelector('.close-viewer');

// Open modal when an image is clicked
coolSection.addEventListener('click', (event) => {
    if (event.target.tagName === 'IMG') {
        console.log(event.target.src);

        modalImg.src = event.target.src.replace('sm', 'full');
        modalImg.alt = event.target.alt;

        modal.showModal();
    }
});

// Close modal on button click
closeButton.addEventListener('click', () => {
    modal.close();
});

// Close modal when clicking outside the image
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});