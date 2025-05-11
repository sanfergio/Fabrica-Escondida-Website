document.addEventListener("DOMContentLoaded", function() {
    // Criar a div para o WhatsApp
    const whatsappDiv = document.createElement("div");
    whatsappDiv.style.position = "fixed";
    whatsappDiv.style.bottom = "20px";
    whatsappDiv.style.padding= "20px";
    whatsappDiv.style.left = "20px";
    whatsappDiv.style.width = "60px";
    whatsappDiv.style.height = "60px";
    whatsappDiv.style.borderRadius = "50%";
    whatsappDiv.style.backgroundColor = "#25D366";
    whatsappDiv.style.display = "flex";
    whatsappDiv.style.justifyContent = "center";
    whatsappDiv.style.alignItems = "center";
    whatsappDiv.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
    whatsappDiv.style.cursor = "pointer";
    whatsappDiv.style.zIndex = "9999";  // Definindo o z-index
    whatsappDiv.onclick = function() {
        window.open("https://api.whatsapp.com/send/?phone=5511994439172&text=Ol%C3%A1%21+Vim+pelo+site+da+F%C3%A1brica+Escondida+e+gostaria+de+conversar+sobre+solu%C3%A7%C3%B5es+para+otimizar+a+gest%C3%A3o+da+minha+empresa.+Poder%C3%ADamos+agendar+uma+conversa%3F&type=phone_number&app_absent=0", "_blank");
    };

    const whatsappIcon = document.createElement("i");
    whatsappIcon.classList.add("fab", "fa-whatsapp");
    whatsappIcon.style.color = "white";
    whatsappIcon.style.fontSize = "20px";
    whatsappDiv.appendChild(whatsappIcon);

    // Adicionar o ícone do WhatsApp ao body
    document.body.appendChild(whatsappDiv);
});
