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
