var buttons = document.querySelectorAll('li');
var body = document.querySelector('div');
var index = 0;

function bttnsOnClick(event){
    var element = event.target;
    if(element.classList.contains('prev')){
        if(index<=0){
            index = 2;
        } else {
            index--;
        }
        rotate(index);
    }
    if(element.classList.contains('next')){
        if(index>=2){
            index = 0;
        } else {
            index++;
        }
        rotate(index);
    }
}

function rotate(index){
    switch(index){
        case 0:
            body.style.transform = "skew(25deg) scale(0.8) rotate(-30deg)";
            break;
        case 1:
            body.style.transform = "skew(0deg) scale(0.8) rotate(0deg)";
            break;
        case 2:
            body.style.transform = "skew(-25deg, -15deg) scale(0.8) rotate(20deg)";
            break;
    }
}

buttons.forEach(function (element, index, array) {
    element.addEventListener('click', bttnsOnClick);
})