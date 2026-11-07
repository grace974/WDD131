
// PHOENIX.EXE CHARACTER OBJECT

const character = {
    name: "PHOENIX.EXE",
    class: "Cyber Guardian",
    level: 10,
    health: 100,

    // ATTACK METHOD
    attacked() {
        this.health -= 20;

        if (this.health <= 0) {
            this.health = 0;

            document.querySelector("#message").textContent =
                "SYSTEM FAILURE! PHOENIX.EXE HAS FALLEN!";
        } else {
            document.querySelector("#message").textContent =
                "WARNING! PHOENIX.EXE HAS TAKEN DAMAGE!";
        }

        displayCharacter();
    },

    // LEVEL UP METHOD
    levelUp() {
        this.level += 1;

        document.querySelector("#message").textContent =
            "UPGRADE COMPLETE! PHOENIX.EXE HAS EVOLVED!";
        
        displayCharacter();
    }
};


// DISPLAY CHARACTER INFORMATION

function displayCharacter() {
    document.querySelector("#characterName").textContent =
        character.name;

    document.querySelector("#characterClass").textContent =
        character.class;

    document.querySelector("#level").textContent =
        character.level;

    document.querySelector("#health").textContent =
        character.health;
}


// ATTACK BUTTON

document.querySelector("#attackButton").addEventListener("click", function () {
    if (character.health > 0) {
        character.attacked();
    }
});


// LEVEL UP BUTTON

document.querySelector("#levelButton").addEventListener("click", function () {
    if (character.health > 0) {
        character.levelUp();
    }
});


// INITIAL CHARACTER DISPLAY

displayCharacter();
