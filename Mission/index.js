
let selectElem = document.querySelector('select');
let logo = document.querySelector('img');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;

    const elements = document.getElementsByClassName("my-paragraph");
    
    if (current == 'dark') {
            document.getElementById("logo").src = "byui-logo.white.png";
            document.body.style.backgroundColor = "black";
            for (let p of elements) {
                p.style.color = "white";
            }
            
    } 
    else if (current == 'light'){
        document.getElementById("logo").src = "byui-logo-blue.webp";
        document.body.style.backgroundColor = "white";
        for (let p of elements) {
            p.style.color = "black";
        }
        
    }
        // code for changes to colors and logo
    
}           
                    