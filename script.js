let cnt = 0
var bg = ["url('./image/popcat1.png')","url('./image/popcat2.png')"]
var i = 0;
var meow = new Audio('./image/meow.mp3');

function addCnt() {
    cnt += 1
    document.getElementById("cnt").innerText = `${cnt}`
    meow.play();
    document.body.style.backgroundImage = bg[1];
    setTimeout(()=> {
        document.body.style.backgroundImage = bg[0];
    },200);
}