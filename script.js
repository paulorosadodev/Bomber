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
        element.style.scale = 1
        element.style.boxShadow = "none"
    }

}

poke.addEventListener('click', change)

function change() {
    const cards = document.querySelectorAll('.card');
    console.log(poke.style)
    if (poke.style.backgroundImage == 'url("https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pokebola-pokeball-png-0.png/640px-Pokebola-pokeball-png-0.png")') {
        cards.forEach(card => {
            if (card.style.backgroundColor != "green") {
                card.style.backgroundImage = "url(https://tcg.pokemon.com/assets/img/global/tcg-card-back.jpg)"
            }
        });
        poke.style.backgroundImage = "url('https://cdn.discordapp.com/attachments/759469975298768916/1257497185684033667/latest.png?ex=66849f04&is=66834d84&hm=6d932023c044f5b0a9a2700cac52b98cbcbac1205ada4fb1cea3a12fa820fc1c&')"
        poke.style.backgroundSize = "cover"
    } else {
        cards.forEach(card => {
            if (card.style.backgroundColor != "green") {
                card.style.backgroundImage = "url(https://i.pinimg.com/originals/30/06/3f/30063f7f9d656fe19779ff2508578287.png)"
            }
        });
        poke.style.backgroundImage = 'url("https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pokebola-pokeball-png-0.png/640px-Pokebola-pokeball-png-0.png")'
        poke.style.backgroundSize = "contain"
    }
}