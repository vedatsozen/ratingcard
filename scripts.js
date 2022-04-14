const btnSubmit = document.querySelector('.submit');
const btn = document.querySelectorAll('label'); //Select all the buttons
const thankyoucard = document.getElementById('thankyoucard');
const score = document.querySelector('.score');
let value; //value selected by user

//for every button add an EventListener
btn.forEach((element, i, arr) => { 
    element.addEventListener('click', (e)=>{
        //When user click, save the value
        value = +e.target.textContent; //textContent return a string the plus (+) parse the string to a number
        
        //Change the color of the selected button adding a class
        arr.forEach( btnelem => {
            btnelem.classList.remove('selectedBtn');
        });

        element.classList.toggle('selectedBtn');
    })
});
//Add an eventlistener to submit button
btnSubmit.addEventListener('click', () => {
    //If there is a value in the variable "value"
    if(value){
        //display thankyoucard
        thankyoucard.classList.remove('hidden');
        score.textContent = value;
    } else {
        //otherwise display an alert
        alert('Please choose a value');
    }
})
