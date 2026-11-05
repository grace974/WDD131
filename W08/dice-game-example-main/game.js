// 1. click on button
document.querySelector('#rollButton').addEventListener("click", e => {
    
    // Get all images that are NOT locked (their checkbox is unchecked)
    const unlockedImages = Array.from(document.querySelectorAll('#gameboard img'))
        .filter(image => isDieUnlocked(image));

    // 2. animate only the unlocked dice
    unlockedImages.forEach(image => {
        image.src = "assets/die_rolling.gif";
    });

    // 3. land on a new random number after 1 second
    setTimeout(() => {
        unlockedImages.forEach(image => {
            const randomNumber = Math.ceil(Math.random() * 6);
            image.src = `assets/white_dice_${randomNumber}.gif`;
        });
    }, 1000);
});

function setDieImages(imagePath){
    document.querySelectorAll('#gameboard img').forEach(image => {
        image.src = imagePath;
    });
};

function isDieUnlocked(dieImage){
    return Array.from(document.querySelectorAll('#gameboard input'))
        .filter(checkbox => !checkbox.checked)
        .find(unchecked => unchecked.className === dieImage.className);
};

