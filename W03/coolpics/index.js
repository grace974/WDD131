let coolSection = document.querySelector('.coolimg');
let modal = document.querySelector('dialog');
let modalImg = modal.querySelector('img');
const closeButton = modal.querySelector('.close-viewer');

coolSection.addEventListener('click', (event) => {
    console.log(event.target.src);

    if(event.target.src !== undefined){
        modalImg.src = event.target.src.replace("sm", "full");
        modal.showModal();
    }

});
closeButton.addEventListener('click', () => {
        modal.close();
    });
    
modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.close();
        };
});