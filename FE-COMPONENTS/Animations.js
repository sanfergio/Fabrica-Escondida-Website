// função para ativar fade-in 

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target);
        }
    });
});

document.querySelectorAll(".fade-in").forEach((element) => {
    observer.observe(element);
});

document.querySelectorAll(".fade-in-img").forEach((element) => {
    observer.observe(element);
});

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
