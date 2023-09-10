//Musique de fond
function add_line() {
    let line = document.createElement("audio");
    let head = document.getElementsByTagName('body')[0];
    line.type = "audio/mp3";
    line.src="title.mp3";
    line.id="bgSong" ;
    line.autoplay = true;
    line.loop = true;
    head.appendChild(line);
}if(document.getElementById('bgSong')==null){
    add_line();
    let audio = document.getElementById('bgSong');
    audio.volume = 0.3;
}

//Deuxieme musique de fond
function add_other_line() {
    let line = document.createElement("audio");
    let head = document.getElementsByTagName('body')[0];
    line.type = "audio/mp3";
    line.src="chuchotement.mp3";
    line.id="bgSong2" ;
    line.autoplay = true;
    line.loop = true;
    head.appendChild(line);
}if(document.getElementById('bgSong2')==null){
    add_other_line();
    let audio = document.getElementById('bgSong2');
    audio.volume = 0.4;
    
}


//Bouton parler
let talk = document.getElementById('talk');
function scary (){

    let modal = document.getElementById("myModal");

    modal.style.display = "block";
    talk.style.display = "none";
}
talk.addEventListener('click',scary);

function speak(){
    let talktogengar = ['AHAHAHA,Tu ose essayer de me faire dormir ?','Pour qui te prend tu ?','','Sans fin'];
    let greatanwser = ["C'est bien au moins tu avoue ton erreur", "Mais je suis pas comme les autres prend en conscience","Ca va tu es pas mechant juste con jte laisse partir tranquille"]
    let badanswer = ["Aaah tes sûr de ca ?","Pour qui te prend tu ?", "Je vais te faire vivre un cauchemar"]
    let modal = document.querySelector('.modal-body')

    for (let i = 0; i < talktogengar.length; i++){
        modal.appendChild(document.createElement('p'))
        modal.appendChild(document.createTextNode(`${talktogengar[i]}`))

}
}
talk.addEventListener('click',speak)



//non fonctionnel
let para = document.getElementsByClassName('p');
function taping() {
    let motaleatoire = ['AHAHAHA','Tu ose essayer de me faire dormir ?','Pour qui te prend tu','Je vais te faire vivre un cauchemar','Sans fin','Mmh finalement non tu m\ intéresses pas assez','Clique sur la croix est dégage'];
    let modal = document.querySelector('.modal-body')

    for (let i = 0; i < motaleatoire.length; i++){
        setTimeout(function (){
            modal.appendChild(document.createElement('p'))
            modal.appendChild(document.createTextNode(`${motaleatoire[i]}`))
        },500)
    }

}
// talk.addEventListener('click',taping)

// jeu de la croix
let counter = 0
let croix = document.querySelector('span')
function replace() {
    if (counter < 5) {
        let body = document.querySelector('body')
        let bodyWidth = body.offsetWidth
        let bodyHeight = body.offsetHeight
        croix = document.querySelector('span')
        let newPosex = Math.floor(Math.random() * bodyWidth)
        let newPosey = Math.floor(Math.random() * bodyHeight)
        croix.style.top = newPosey + 'px';
        croix.style.left = newPosex + 'px';
        console.log(bodyHeight);
        counter++
    }
    else{
        let lastModal = document.querySelector('.modal-body2')
        window.close()
    }
}
croix.addEventListener('click',replace);










