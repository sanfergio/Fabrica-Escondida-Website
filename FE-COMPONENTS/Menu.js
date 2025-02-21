function menu() {
    let central = document.querySelector("#menu-father");

    if (central.style.left = "100vw") {

        central.style.left ="0";

    } else { 
        central.style.left = "100vw";
    }
}

function menu_fechar(){

    let central = document.querySelector("#menu-father");

    if (central.style.left = "0") {

        central.style.left ="100vw";

    } else { 
        central.style.left = "0"; 

    }
}



let Menu = document.getElementById("menu-father")

Menu.innerHTML = `


            <div id="menu-box">
                <div  onclick="menu_fechar()" class="menu-line" id="menu-close">
                    <i style="overflow-y: hidden; margin-left: 5vw;"  class="fa fa-close"></i>
                </div>
                <a href="/" class="menu-line">Sobre nós</a>
                <a href="/" class="menu-line">Serviços de Manunteção</a>
                <a href="/" class="menu-line">Projetos</a>
                <a href="/" class="menu-line">Clientes</a>
                <a href="/" class="menu-line">Fábrica Escondida EAD</a>
                <a href="/" class="menu-line">Fale conosco</a>                
            </div>



`