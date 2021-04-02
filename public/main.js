const choose = document.querySelectorAll('.answer')
const selections = [];


// if (!localStorage.counter) {
//     localStorage.setItem('counter', 0)
// }


Array.from(choose).forEach((element) => {
    element.addEventListener('click', nextQuestion)
})

function nextQuestion() {
    selections.push(this.innerText)
    console.log(selections)


}

// one question is now showing using a counter declared in server js,
//the event listener above needs to add 1 to the counter on click, and add chosen inner text to the player object with a key of counter
//****** or make chosen answers an array and just push the innertext result****