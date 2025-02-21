document.addEventListener("DOMContentLoaded", function () {
    // Criar elementos da tela de carregamento
    const loadingDiv = document.createElement("div");
    loadingDiv.id = "loading";
    loadingDiv.style.position = "fixed";
    loadingDiv.style.top = "0";
    loadingDiv.style.left = "0";
    loadingDiv.style.width = "100%";
    loadingDiv.style.height = "100%";
    loadingDiv.style.background = "whitesmoke";
    loadingDiv.style.display = "flex";
    loadingDiv.style.justifyContent = "center";
    loadingDiv.style.alignItems = "center";
    loadingDiv.style.zIndex = "9999";

    const spinner = document.createElement("div");
    spinner.className = "spinner";
    spinner.style.width = "50px";
    spinner.style.height = "50px";
    spinner.style.border = "5px solid #091d34";
    spinner.style.borderTop = "5px solid transparent";
    spinner.style.borderRadius = "50%";
    spinner.style.animation = "spin 1s linear infinite";

    // Criar animação do spinner
    const style = document.createElement("style");
    style.textContent = `
        @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
    `;
    document.head.appendChild(style);

    // Adicionar elementos à tela de carregamento
    loadingDiv.appendChild(spinner);
    document.body.appendChild(loadingDiv);
});

// Aguarda o carregamento COMPLETO da página e remove o loading
window.addEventListener("load", function () {
    setTimeout(() => {
        document.getElementById("loading").style.display = "none";
    }, 2000); // Pequeno delay para suavidade
});
