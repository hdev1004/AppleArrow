window.addEventListener('load', loaded);
window.addEventListener("mousemove", rotateArrow);

let arrow;

function loaded() {
    makeArrow(100);
    //make random img position
    arrow = document.querySelectorAll(".arrow");
    for(let i = 0; i < arrow.length; i ++) {
        let random = randomSize();
        arrow[i].style.left = Math.floor(Math.random() * 99) + 'vw';
        arrow[i].style.top = Math.floor(Math.random() * 99) + 'vh';
        arrow[i].style.width = random + 'px';
        arrow[i].style.zIndex = parseInt(random) * 10;
        console.log(arrow[i].style.zIndex);
    }
}

function makeArrow(n) {
    for(let i = 0; i < parseInt(n); i ++) {
        let img = document.createElement("img");
        img.className = "arrow";
        img.src = "img/arrows.png";
        document.querySelector("body").appendChild(img);
    }
}

function randomSize(min, max) {
    min = Math.ceil(40);
    max = Math.ceil(150);
    return Math.floor(Math.random() * (max - min)) + min;
}

function rotateArrow() {
    arrow.forEach(function(arrow) {
        let x = (arrow.getBoundingClientRect().left) + (arrow.clientWidth / 2);
        let y = (arrow.getBoundingClientRect().top) + (arrow.clientWidth / 2);
        
        let radian = Math.atan2(event.pageX - x, event.pageY - y);
        let rot = (radian * (180 / Math.PI) * -1) + 270;
        arrow.style.transform = "rotate(" + rot + "deg)";
    })

    
}