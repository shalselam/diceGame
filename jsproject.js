'use strict';

const model = document.querySelector('.back')
const overLay = document.querySelector('.overLay')
const closeButton = document.querySelector('.close-model')
const buttons = document.querySelectorAll('.button-1')
console.log(buttons)
function back() {
     document.querySelector('.back').classList.add('hidden')

}
for (let i = 0; i < buttons.length; i++) {

    buttons[i].addEventListener('click', function () {
        model.classList.remove('hidden')
        // doccument.querySelector('hidden').style = 'visiblity:visible'
        console.log('button clicked')
    })
}
