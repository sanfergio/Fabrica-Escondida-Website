let Header = document.querySelector("#header");

Header.innerHTML = `
    <div class="mid"></div> 
    <div class="mid">
        <img src="FE-IMAGES/logo_name.png"/>
    </div> 
    <nav>
        <i id="lupa-search" class="fa fa-search"></i> 
        <i id="menu-hamburguer" class="fa fa-bars menu"></i>
    </nav>
`;


window.addEventListener("scroll", function () {

    if (window.scrollY > window.innerHeight * 0.12) {
        Header.classList.add("header_fixed");
    } else {
        Header.classList.remove("header_fixed");
    }
});
