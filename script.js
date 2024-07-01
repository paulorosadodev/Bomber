function gerarNumeroAleatorio() {
    return Math.floor(Math.random() * 9) + 1;
}

const number = gerarNumeroAleatorio()

var audio = new Audio('audio.mp3');

console.log(number)

function game(num) {
    if (num == number) {
        let bomb = document.getElementById(String(number))

        bomb.style.backgroundImage = "url('https://img.odcdn.com.br/wp-content/uploads/2023/07/explosao-nuclear-1.png')"
        
        explosion.style.display = "block"

        setTimeout(function() {
            died.style.display = "block"
        }, 500);

        setTimeout(function() {
            died.style.display = "block"
            explosion.style.display = "none"
        }, 1700);

        audio.play();
    }
}