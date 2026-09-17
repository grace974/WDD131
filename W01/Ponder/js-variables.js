// let is variable. dont forget the ;

let age = 20;
let name = "Grace Thompson";

// This is like print in Python
/* Multiline comment

*/
console.log(age);

age = 21;

console.log(age);

const eyeColor = "blue";
const policyDisclaimers = "Exclusions apply to vehicles registered in Michigan";

// scope if where variables can be referenced

if(age == 21) {
    // now in a different scope
    // inside this scope, we can reference variables declared outside this scope
    console.log(name);
    //delare a variable in an inner scope
    let favoriteColor = "blue"
}

console.log(favoriteColor);

//pull something from the HTML Page
document.querySelector("h1").style.color = favoriteColor;
                    