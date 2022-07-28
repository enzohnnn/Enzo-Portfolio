let alertButton = document.getElementById("alert-button");
let alertDialog = document.getElementById('alert-dialog');

alertButton.addEventListener('click', ()=> {
    alertDialog.showModal();
    console.log("here");
});

let confirmButton = document.getElementById("confirm-button");
let confirmDialog = document.getElementById("confirm-dialog");

let outputText = document.getElementById('output-text');

confirmButton.addEventListener('click', ()=> {
    confirmDialog.showModal();
})

confirmDialog.addEventListener('close', ()=> {
    outputText.innerHTML = `Confirm result: ${confirmDialog.returnValue}`;
});

let promptButton = document.getElementById("prompt-button");
let promptDialog = document.getElementById("prompt-dialog");

promptButton.addEventListener('click', ()=> {
    promptDialog.showModal();
});

let promptText = document.getElementById("prompt-text");
var promptOutput = `User didn't enter anything!`; 

promptText.addEventListener('input', function handleChange(event) {
    promptOutput = event.target.value;
});

promptDialog.addEventListener('close', ()=> {
    promptText.value = ``;
});


let promptConfirmButton = document.getElementById("prompt-confirm-button");
promptConfirmButton.addEventListener('click', ()=> {
    let output = promptText.value;
    let clean = cleanData(`${output}`);
    if(clean != 0) {
        outputText.innerHTML = `Prompt result: ${clean}`;
    } else {
        outputText.innerHTML = `User didn't enter anything!`;
    }
    
})

function cleanData(userInput) {
    return DOMPurify.sanitize(userInput);
}