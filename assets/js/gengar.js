let gengar = document.getElementById("img");
let fight = document.getElementById('fight');
let play = document.querySelector('#play');
let sleep = document.querySelector('#sleep');
let transition = document.querySelector('.sombre');
let rightFloat = document.getElementById('rightStat');
let leftFloat = document.getElementById('leftStat');

function Actions (){

    this.fighting = function () {
        this.gifsFight = ['fight', 'fight2', 'fight3', 'fight4'];
        this.randomForGifs = Math.floor(Math.random() * this.gifsFight.length);
        gengar.classList.remove(startActions.playing.gifsPlaying);
        gengar.classList.add(this.gifsFight[this.randomForGifs]);
        setTimeout(function (){
            gengar.classList.remove();
            gengar.classList.add("ectoplasma");
        }, 7000);
    }

    this.playing = function () {
        this.gifsPlaying = ['play', 'play2', 'play3'];
        this.randomForPlay = Math.floor(Math.random() * this.gifsPlaying.length);
        gengar.classList.remove(startActions.playing.gifsFight);
        gengar.classList.add(this.gifsPlaying[this.randomForPlay]);
        setTimeout(function (){
            gengar.classList.remove();
            gengar.classList.add("ectoplasma");
        }, 3000);
    }

    this.sleeping = function (){
        addEventListener('click', function () {
            transition.classList.add('transition');
            setTimeout(function () {
                window.open('file:///Users/coding/Downloads/Tamagotchi-master/view/scaryGengar/scaryGengar.html');
                window.close();
            }, 5000)
        });
    }
}



function Stat () {
    this.stat = function () {
        this.rdmHumeur = Math.floor(Math.random() * 10);
        this.rdmVieWin = Math.floor(Math.random() * 25)
        this.rdmVieDefeat = Math.floor(Math.random() * 50)
        this.statHumeur = document.getElementById('humeur');
        this.statSante = document.getElementById('vie');
        this.statHumeur = 100;
        this.statSante = 210;
        this.humeur = function () {

            if (startActions.fighting.gifsFight[0] || startActions.fighting.randomForGifs === startActions.fighting.gifsFight[1]) {
                startActions.statHumeur -= startActions.rdmHumeur;



            } else if (startActions.fighting.randomForGifs === startActions.fighting.gifsFight[2] || startActions.fighting.randomForGifs === startActions.fighting.gifsFight[3]) {
                startActions.statHumeur += startActions.rdmHumeur;
            }
        }
        this.vie = function (){
            if (startActions.fighting.randomForGifs === startActions.fighting.gifsFight[0] || startActions.fighting.randomForGifs === startActions.fighting.gifsFight[1]) {
                startActions.statSante -= startActions.rdmVieDefeat;

            } else if (startActions.fighting.randomForGifs === startActions.fighting.gifsFight[2] || startActions.fighting.randomForGifs === startActions.fighting.gifsFight[3]) {
                this.ok = startActions.statSante += startActions.rdmVieWin;
            }
        }
    }
}

let startStat = new Stat;
let startActions = new Actions();
play.addEventListener('click',startActions.playing);
fight.addEventListener("click",startActions.fighting);
sleep.addEventListener('click',startActions.sleeping);
fight.addEventListener('click', startActions.humeur);



let animationStat = [
    { height: `200px`},
];

let animationTiming = {
    duration: 5000,
}

leftFloat.animate(
    animationStat,
    animationTiming,
)
rightFloat.animate(
    animationStat,
    animationTiming,
)
