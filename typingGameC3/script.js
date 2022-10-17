const quote = document.getElementById('quote');
const input = document.getElementById('typed-value');
const start = document.getElementById('start');

let targetWord;

function startGame(){
    console.log("Game started");

    targetWord = "typeme";
    quote.innerHTML = `<span>${targetWord}</span>`;
}
start.addEventListener('click', startGame);
input.addEventListener('input', checkInput);

function checkInput() {
    console.log("Checking", input.value);
        const currentWord = targetWord;
        const typedValue = input.value.trim();
        if (currentWord !== typedValue) {
            input.className = currentWord.startsWith(typedValue) ? "" : "error";
            return;
        }
    }

