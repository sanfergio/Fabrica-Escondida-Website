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
                <a href="/Sobre/" class="menu-line">Sobre nós</a>
                <a href="/Servicos/" class="menu-line">Serviços</a>
                <a href="/Cases/" class="menu-line">Cases de Sucesso</a>
                <a href="/Artigos/" class="menu-line">Artigos</a>
                <!-- <a href="/GEM/" class="menu-line">GEM | Gestão de Excelência em Manutenções</a> -->
                <a href="https://ead.fabricaescondida.com.br" target = "_blank" class="menu-line">Fábrica Escondida EAD</a>
                <a href="https://api.whatsapp.com/send/?phone=5511994439172&text=Ol%C3%A1%21+Vim+pelo+site+da+F%C3%A1brica+Escondida+e+gostaria+de+conversar+sobre+solu%C3%A7%C3%B5es+para+otimizar+a+gest%C3%A3o+da+minha+empresa.+Poder%C3%ADamos+agendar+uma+conversa%3F&type=phone_number&app_absent=0" target = "_blank" class="menu-line">Fale Conosco</a>                
            </div>


`