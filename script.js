let letters = Array.from(document.querySelectorAll(".letters span"));
let theWord = document.querySelector(".word");
let hangmanParts = Array.from(document.querySelectorAll(".hangman div"));
let winer = document.querySelector(".winer");
let loser = document.querySelector(".loser");
let chars = document.querySelectorAll(".word span");
let time = document.querySelector(".count span");


let demoWords = [
    "javascript",
    "python",
    "java",
    "ruby",
    "php",
    "swift",
    "golang",
    "typescript",
    "rust",
    "kotlin",
]

let randomNumber = Math.floor(Math.random() * demoWords.length);
console.log(demoWords[randomNumber]);

function addLettersToSpans(){
    letters.forEach((letter)=>{
        letter.addEventListener("click",()=>{
            letter.classList.add("clicked");
            checkLetter(letter.textContent);
        })
    })
}
addLettersToSpans();

function creatSpans(){
    for(let i = 0; i < demoWords[randomNumber].length; i++){
        let letterSpan = document.createElement("span");
        theWord.appendChild(letterSpan);
    }
    
}
creatSpans();

let wrongAttempts = 0;
function showTheHangman(){
    hangmanParts[wrongAttempts].classList.add("show");
    wrongAttempts++;
    if(wrongAttempts === 8){
        document.querySelector(".loser .lose-popup").innerHTML = `Game Over, The Word Is ${demoWords[randomNumber]}`;
        loser.style.display = "block";
    } 
}

let correctAttempts = 0;
function checkLetter(character){
    let arrOfCharsWord = demoWords[randomNumber].split("");
    
    if(arrOfCharsWord.includes(character)){
        for(let i = 0; i < arrOfCharsWord.length; i++){
            if(arrOfCharsWord[i] === character){ 
                theWord.children[i].textContent = character;
                correctAttempts++;
            }
        }
    } else showTheHangman();
    
    if(correctAttempts === arrOfCharsWord.length){
        document.querySelector(".winer .win-popup").innerHTML = `You win !, Your Mistakes Are ${wrongAttempts} `;
        winer.style.display = "block";
    }
}


let playAgain = Array.from(document.querySelectorAll(".play-again"))
playAgain.forEach((ele)=>{
    ele.addEventListener("click",()=>{
        location.reload();
    })
})

const counter = setInterval(()=>{
    if(time.textContent > 0){
        parseInt(time.textContent--);
    }
    if(time.textContent == 0){
        document.querySelector(".loser .lose-popup").innerHTML = `Game Over, The Word Is ${demoWords[randomNumber]}`;
        loser.style.display = "block";
    } 
},800)
