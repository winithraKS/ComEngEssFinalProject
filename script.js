var cnt = 0
var current_animal = "cat"

var bg_cat = ["url('./image/popcat1.png')","url('./image/popcat2.png')"]
var bg_dog = ["url('./image/popdog1.png')","url('./image/popdog2.png')"]
var bg_pig = ["url('./image/poppig1.png')","url('./image/poppig2.png')"]
var bg_whale = ["url('./image/popwhale1.png')","url('./image/popwhale2.png')"]
var bg_sheep = ["url('./image/popsheep1.png')","url('./image/popsheep2.png')"]
var bg_elephant = ["url('./image/popelephant1.png')","url('./image/popelephant2.png')"]
var bg_wolf = ["url('./image/popwolf1.png')","url('./image/popwolf2.png')"]

var meow = new Audio('./image/meow.mp3');
var barking = new Audio('./image/barking.mp3')
var oink = new Audio('./image/oink.mp3')
var whale = new Audio('./image/whale.mp3')
var baa = new Audio('./image/baa.mp3')
var elephant = new Audio('./image/elephant.mp3')
var howl = new Audio('./image/howl.mp3')

function addCnt() {
    cnt += 1
    document.getElementById("cnt").innerText = `${cnt}`
    switch(current_animal) {
        case "cat" :
            meow.play();
            document.body.style.backgroundImage = bg_cat[1];
            setTimeout(()=> document.body.style.backgroundImage = bg_cat[0],200);
            break;
        case "dog" :
            barking.play();
            document.body.style.backgroundImage = bg_dog[1];
            setTimeout(()=> document.body.style.backgroundImage = bg_dog[0],200);
            break;
        case "pig" :
            oink.play();
            document.body.style.backgroundImage = bg_pig[1];
            setTimeout(()=> document.body.style.backgroundImage = bg_pig[0],200);
            break;
        case "whale" :
            whale.play();
            document.body.style.backgroundImage = bg_whale[1];
            setTimeout(()=> document.body.style.backgroundImage = bg_whale[0],200);
            break;
        case "sheep" :
            baa.play();
            document.body.style.backgroundImage = bg_sheep[1];
            setTimeout(()=> document.body.style.backgroundImage = bg_sheep[0],200);
            break;
        case "elephant" :
            elephant.play();
            document.body.style.backgroundImage = bg_elephant[1];
            setTimeout(()=> document.body.style.backgroundImage = bg_elephant[0],200);
            break;
        case "wolf" :
            howl.play();
            document.body.style.backgroundImage = bg_wolf[1];
            setTimeout(()=> document.body.style.backgroundImage = bg_wolf[0],200);
            break;
    }
    
}

function change_animal() {
    current_animal = document.getElementById("select-animal-btn").value;
    switch(current_animal) {
        case "cat" :
            document.body.style.backgroundImage = bg_cat[0];
            break;
        case "dog" :
            document.body.style.backgroundImage = bg_dog[0];
            break;
        case "pig" :
            document.body.style.backgroundImage = bg_pig[0];
            break;
        case "whale" :
            document.body.style.backgroundImage = bg_whale[0];
            break;
        case "sheep" :
            document.body.style.backgroundImage = bg_sheep[0];
            break;
        case "elephant" :
            document.body.style.backgroundImage = bg_elephant[0];
            break;
        case "wolf" :
            document.body.style.backgroundImage = bg_wolf[0];
            break;
    }
}