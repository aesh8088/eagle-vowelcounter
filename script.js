let textarea = document.getElementById('textarea');
let button = document.getElementById('vowel-btn');
let output = document.getElementById('output');

button.addEventListener('click', () =>{
    let inputValue = textarea.value;

    if(!inputValue){
        output.innerHTML = "Please enter some text to calculate vowels.";
        output.style.backgroundColor = "white";
        output.style.color = "red";
        return;
    } else {

        let count = 0;

        for(let i=0; i<inputValue.length; i++){
            if(inputValue[i] === "a" || inputValue[i] === "e" || inputValue[i] === "i" || inputValue[i] === "o" || inputValue[i] === "u")
                
              count++;
        }
        output.innerHTML = `The number of vowels are ${count}`;
        output.style.backgroundColor = "black";
        output.style.color = "white";
    } 


})