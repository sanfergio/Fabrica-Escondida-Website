let lupa = document.querySelector("#lupa-search");
let barra = document.querySelector("#barra-div");
let Search = document.querySelector("#barra-search");

function search() {
    lupa.style.display = "none";
    barra.style.display = "flex";
    window.location.href = "#barra-search";
}