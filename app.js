let letters = document.querySelectorAll(".letters h1");
let ball = document.querySelector(".ball");
let count = 1;
let colors = ["rgb(0, 110, 255)", "rgb(255, 0, 0)", "rgb(255, 255, 255)", "rgb(255, 217, 0)", "rgb(0, 255, 0)","rgb(183, 134, 11)"]

for(let x = 0;x<letters.length;x++){
    letters[x].style.animation = `jump 1s ease ${x/6}s alternate infinite`;
    letters[x].style.color = `${colors[x]}`
    console.log(x);
}
setInterval(() => {
    ball.style.background = colors[count];
    if (count == letters.length - 1) {
        count = 0;
    } else {
        count = count + 1;
    }
},2000)