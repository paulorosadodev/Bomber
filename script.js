let cont = 0

function gerarNumeroAleatorio() {

    return Math.floor(Math.random() * 9) + 1;

}

const number = gerarNumeroAleatorio()

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
        
        var cardflip = new Audio('sounds/cardflip.mp3');

        cardflip.play()
        bomb.classList.add('is_flipped')
        
        let img = document.createElement('img')
        img.setAttribute('src', 'https://cdn.discordapp.com/attachments/759469975298768916/1257769620056834109/x.png?ex=66859cbd&is=66844b3d&hm=814c8e9b6f1d5257f5bbc2d5a46988625e2e01f38532bcfec3b7dcd7078f27d7&')
        img.style.width = '50px'
        bomb.appendChild(img)
        
        bomb.style.backgroundImage = "none"
        bomb.style.backgroundColor = 'red'
        bomb.style.pointerEvents = "none"
        bomb.style.scale = 1
        bomb.style.boxShadow = "none"
        
        explosion.style.display = "block"

        setTimeout(function() {
            died.style.opacity = "1";
            died.style.pointerEvents = "auto"
        }, 500);

        setTimeout(function() { 
            explosion.style.display = "none";
        }, 1700);

        var explosion_sound = new Audio('sounds/explosion.mp3');

        explosion_sound.play();
    } else {
        let element = document.getElementById(String(num))
        
        var cardflip = new Audio('sounds/cardflip.mp3');

        cardflip.play()
        element.classList.add('is_flipped')
        
        let img = document.createElement('img')
        img.setAttribute('src', 'https://cdn.discordapp.com/attachments/759469975298768916/1257762599358169109/check.png?ex=66859633&is=668444b3&hm=5aefe44f2892674441901d46205313fa80e9247480f543a5043748e6339e6825&g')
        img.style.width = '50px'
        element.appendChild(img)

        element.style.borderRight = "none"
        element.style.borderLeft = "0px solid aquamarine"
        element.style.backgroundColor = "green"
        element.style.backgroundImage = "none"
        element.style.pointerEvents = "none"
        element.style.scale = 1
        element.style.boxShadow = "none"

        cont++
        
        if (cont == 8) {
            setTimeout(function() {
                win.style.opacity = "1";
                win.style.pointerEvents = "auto"
            }, 100);

            var win_sound = new Audio('win.mp3');

            win_sound.play();
        }

    }

}

document.getElementById('poke').addEventListener('click', change)

function change() {
    const cards = document.querySelectorAll('.card');
    if (String(window.getComputedStyle(poke)['backgroundImage']).includes("Poke")) {
        cards.forEach(card => {
            if (card.style.backgroundColor != "green" && card.style.backgroundColor != 'red') {
                card.style.backgroundImage = "url(https://tcg.pokemon.com/assets/img/global/tcg-card-back.jpg)"
            }
        });
        poke.style.backgroundImage = "url('https://cdn.discordapp.com/attachments/759469975298768916/1257497185684033667/latest.png?ex=66849f04&is=66834d84&hm=6d932023c044f5b0a9a2700cac52b98cbcbac1205ada4fb1cea3a12fa820fc1c&')"
        poke.style.backgroundSize = "cover"
    } else {
        cards.forEach(card => {
            if (card.style.backgroundColor != "green" && card.style.backgroundColor != 'red') {
                card.style.backgroundImage = "url(https://i.pinimg.com/originals/30/06/3f/30063f7f9d656fe19779ff2508578287.png)"
            }
        });
        poke.style.backgroundImage = 'url("https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pokebola-pokeball-png-0.png/640px-Pokebola-pokeball-png-0.png")'
        poke.style.backgroundSize = "contain"
    }
}
