let Header = document.querySelector("#header");

Header.innerHTML = `
    <div class="mid"></div> 
     <a href="index.html"> 
    <div class="mid">
      <img src="/FE-IMAGES/logo_name.png"/> 
    </div> 
    </a>
    <nav>
        <div id="barra-div" style="display: none; align-items: center; justify-content: center;">
    <input id="barra-search" style="color: black;" placeholder="Pesquise agora!" />
    </div>
        <i onclick="menu()" id="menu-hamburguer" class="fa fa-bars menu"></i>
    </nav>
`;


window.addEventListener("scroll", function () {

    if (window.scrollY > window.innerHeight * 0.12) {
        Header.classList.add("header_fixed");
    } else {
        Header.classList.remove("header_fixed");
    }
});

