var buttons = document.querySelectorAll('li');
var body = document.querySelector('.main');
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
            body.style.transform = "rotate(-30deg) skew(25deg) scale(0.8) ";
            break;
        case 1:
            body.style.transform = "rotate(0deg) skew(0deg) scale(0.8) ";
            break;
        case 2:
            body.style.transform = "rotate(20deg) skew(-25deg, -15deg) scale(0.8) ";
            break;
    }
}

buttons.forEach(function (element, index, array) {
    element.addEventListener('click', bttnsOnClick);
})