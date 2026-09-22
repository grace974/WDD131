// Select an HTML Element from the DOM
//save it to a local variable called heading
// in the ("") use css selectors
let heading = document.querySelector("h1");

console.log(heading);

heading.style.color = "red";
heading.style.fontSize = "3em";
heading.style.fontFamily = "monospace";
heading.style.border = "2px dashed pink";
heading.style.textDecoration = "underline";
//CSS : font - size JS : fontSize

// do everything one line
document.querySelector("p").style.color = "green";

// there are differetn ways to select from the DOM
document.getElementById("topics");


// you can select more than one element at a time
// returns a list of elements
console.log(document.querySelectorAll(".list"));


// apply clas to an element
let topicsClassList  = document.querySelector("#topics").classList;
topicsClassList.add("special");
topicsClassList.toggle("special");


let selectElem = document.getElementById('webdevlist');
selectElem.addEventListener('change', function(){
    let codeValue = selectElem.value;
    console.log(codeValue);
    heading.textContent = codeValue;
})
                