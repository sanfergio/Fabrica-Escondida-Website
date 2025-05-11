// funcão carrousel dos serviços

const CarouselService = document.querySelector(".servicos-pai");
let isAuto = true;

function stopAuto() {
    if (isAuto) {
        CarouselService.style.animation = 'none';
        isAuto = false;
    }
}

function direita() {
    stopAuto();
    CarouselService.style.animation = 'none';
    void CarouselService.offsetWidth;
    CarouselService.style.animation = 'moveLeftRight 2s forwards';
}

function esquerda() {
    stopAuto();
    CarouselService.style.animation = 'none';
    void CarouselService.offsetWidth;
    CarouselService.style.animation = 'moveRightLeft 2s forwards';
}

CarouselService.addEventListener('click', stopAuto);
