//Elements

const card = document.getElementById('card');
const form = document.getElementById('form');
const box = document.getElementById('box');
const output = document.getElementById('output');
const sendBtn = document.getElementById('send-btn');
const copyBtn = document.getElementById('copy-btn');
const tryBtn = document.getElementById('try-btn');

//Info

const passLength = document.getElementById('p-length');
const symbols = document.getElementById('p-symbols');
const upper = document.getElementById('p-upper');
const number = document.getElementById('p-number');

//Variables

const LowerCase = 'abcdefghijkmlnopqrstuvwxyz'
const UpperCase = 'ABCDEFGHIJKMLNOPQRSTUVWXYZ';
const Numbers = '0123456789';
const Symbols = '!@#$%^&*()_-+';

//Listeners

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    generatePassword(passLength.value, symbols.checked, upper.checked, number.checked)
    emptyForm();
    if(box.classList.contains('hide')){
        card.classList.add('animate__backOutRight');
        await delay (500);
        card.classList.add('hide');
        box.classList.remove('hide');
        box.classList.add('animate__backInLeft');
    }
});

tryBtn.addEventListener('click', async (e) => {
    e.preventDefault();
    if(card.classList.contains('hide')){
        box.classList.remove('animate__backInLeft');
        box.classList.add('animate__backOutRight');
        await delay (500);
        box.classList.add('hide');
        card.classList.remove('animate__backOutRight');
        card.classList.add('animate__backInLeft');
        card.classList.remove('hide');
    };
});

//Functions

function emptyForm() {
    symbols.checked = false;
    upper.checked = false;
    number.checked = false;
    passLength.value= '';
}

function generatePassword(passLength, symbols, upper) {
    let finalOutput = '';
    console.log(passLength)
    if(passLength == ''){
        console.log('NO')
    } else {
        for(let i = 0; i < passLength; i++) {
            let randomInt = Math.floor(Math.random() * (3 - 1 + 1) + 1)
            switch(randomInt) {
                case 0:
                    finalOutput+= generateWord();
                    break;
                case 1:
                    finalOutput+= generateNumber();
                    break;
                case 2:
                    if(symbols){
                        finalOutput+= generateSymbol();
                    } else {
                        finalOutput+= generateWord();
                    }
                    break;
                case 3:
                    if(upper){
                        finalOutput+= generateUpperWord();
                    } else {
                        finalOutput+= generateWord();
                    }
                    break;
            }
        }
        output.innerText = `${finalOutput}`;
    }
}

function generateWord() {
    return LowerCase[Math.floor(Math.random() * LowerCase.length)]
}

function generateSymbol(){
    return Symbols[Math.floor(Math.random() * Symbols.length)]
}

function generateUpperWord(){
    return UpperCase[Math.floor(Math.random() * UpperCase.length)]
}

function generateNumber() {
    return Numbers[Math.floor(Math.random() * Numbers.length)]
}

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
  }