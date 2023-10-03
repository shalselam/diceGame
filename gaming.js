const p1 = document.querySelector('.p1')
const p2 = document.querySelector('.p2')
let selectPlayer1 = true
let selectPlayer2 = false
let player1score = 0
let player2score = 0
let allChiled = document.querySelectorAll('.all-chiled')
let playerOneHoldScore = 0;
let playerTwoHolScore = 0;

p2.style = 'background-color:  rgba(238, 219, 194, 0.345);'

function updateScore() {

    player1score = player1score + playerOneHoldScore
    player2score = player2score + playerTwoHolScore

    playerOneHoldScore = 0
    playerTwoHolScore = 0

    document.querySelector('#zero').textContent = playerOneHoldScore


    document.querySelector('.result').textContent = player1score
    document.querySelector('.result2').textContent = player2score
    document.querySelector('#zero1').textContent = playerTwoHolScore

    console.log(playerOneHoldScore)
    console.log(playerTwoHolScore)


}


function hold() {

    updateScore()
    selectPlayer1 = !selectPlayer1
    selectPlayer2 = !selectPlayer2
    document.querySelector('.dice').style = 'visibility:visible'
    if (selectPlayer1 == true) {
        p1.style = 'background-color:  rgba(238, 219, 194, 0.589);'
        p2.style = 'background-color:  rgba(238, 219, 194, 0.345);'
    }
    else if (selectPlayer2 == true) {
        p1.style = 'background-color: rgba(238, 219, 194, 0.345);'
        p2.style = 'background-color: rgba(238, 219, 194, 0.589);'
    }
}
function randomNum() {
    let input = Math.round(Math.random() * 5) + 1
    return input
}
function rolling() {
    document.querySelector('.dice').style = 'visibility:visible'
    let rand = randomNum()
    dice(rand)
    if (rand == 1) {
        playerOneHoldScore = 0
        playerTwoHolScore = 0
        hold()
    } else {
        if (selectPlayer1) {
            playerOneHoldScore = playerOneHoldScore + rand
            document.querySelector('#zero').textContent = playerOneHoldScore
        }
        else {
            playerTwoHolScore = playerTwoHolScore + rand
            document.querySelector('#zero1').textContent = playerTwoHolScore
        }
    }
}

function reset() {
    console.log(allChiled)
    for (let i = 0; i < allChiled.length; i++) {
        allChiled[i].classList.remove('selected')
    }

}

function dice(value) {
    document.querySelector('.dice').style = 'visibility:visible'
    reset()
    if (value == 1) {
        document.querySelector('.chiled-2').classList.add('selected')


    }
    else if (value == 2) {
        document.querySelector('.chiled-div3 ').classList.add('selected')
        document.querySelector('.chiled-5').classList.add('selected')

    }
    else if (value == 3) {
        document.querySelector('.chiled-div3 ').classList.add('selected')
        document.querySelector('.chiled-5').classList.add('selected')
        document.querySelector('.chiled-2').classList.add('selected')

    }
    else if (value == 4) {
        document.querySelector('.chiled-div1 ').classList.add('selected')
        document.querySelector('.chiled-div3').classList.add('selected')
        document.querySelector('.chiled-5').classList.add('selected')
        document.querySelector('.chiled-7').classList.add('selected')
    }
    else if (value == 5) {
        document.querySelector('.chiled-div1 ').classList.add('selected')
        document.querySelector('.chiled-div3').classList.add('selected')
        document.querySelector('.chiled-5').classList.add('selected')
        document.querySelector('.chiled-7').classList.add('selected')
        document.querySelector('.chiled-2').classList.add('selected')
    }
    else if (value == 6) {
        document.querySelector('.chiled-div1 ').classList.add('selected')
        document.querySelector('.chiled-div3').classList.add('selected')
        document.querySelector('.chiled-div2').classList.add('selected')
        document.querySelector('.chiled-7').classList.add('selected')
        document.querySelector('.chiled-6').classList.add('selected')
        document.querySelector('.chiled-5').classList.add('selected')
    }
}
function newGame() {
    document.querySelector('.dice').style = 'visibility:hidden'
    if (selectPlayer1 == true) {
        p1.style = 'background-color:  rgba(238, 219, 194, 0.589);'
        p2.style = 'background-color:  rgba(238, 219, 194, 0.345);'
    }
    else if (selectPlayer2 == true) {
        p1.style = 'background-color: rgba(238, 219, 194, 0.345);'
        p2.style = 'background-color: rgba(238, 219, 194, 0.589);'
    }
    player1score = 0
    player2score = 0
    playerOneHoldScore = 0
    playerTwoHolScore = 0
    document.querySelector('.result').textContent = player1score
    document.querySelector('.result2').textContent = player2score
    document.querySelector('#zero').textContent = playerOneHoldScore
    document.querySelector('#zero1').textContent = playerTwoHolScore
    //updateScore()
    player1score = player1score + playerOneHoldScore
    player2score = player2score + playerTwoHolScore
}
