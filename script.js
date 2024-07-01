function gerarNumeroAleatorio() {
    return Math.floor(Math.random() * 9) + 1;
}

const number = gerarNumeroAleatorio()

var audio = new Audio('audio.mp3');

console.log(number)

const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('click', function() {
        const cardId = parseInt(card.id); 
        game(cardId);
    });
});


function game(num) {
    if (num == number) {
        let bomb = document.getElementById(String(number))

        bomb.style.backgroundImage = "url('https://img.odcdn.com.br/wp-content/uploads/2023/07/explosao-nuclear-1.png')"
        
        explosion.style.display = "block"
        
        setTimeout(function() {
            died.style.opacity = "1";
            died.style.pointerEvents = "auto"
        }, 500);

        setTimeout(function() { 
            explosion.style.display = "none";
        }, 1700);

        audio.play();
    } else {
        let element = document.getElementById(String(num))
        
        element.style.backgroundColor = "green"
        element.style.backgroundImage = "none"
        element.innerHTML += "<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Black_check.svg/800px-Black_check.svg.png' style='width: 50px; position'>"
        element.style.pointerEvents = "none"

    }
}