app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

// Captura os elementos do modal
const modal = document.getElementById("produto-modal");
const btn = document.getElementById("comprar-link");
const span = document.getElementsByClassName("close-btn")[0];
const fecharBtn = document.getElementsByClassName("fechar-btn")[0];
btn.onclick = function() {
    modal.style.display = "block"; // Altera para block para centralizar no meio da tela
}
span.onclick = function() {
    modal.style.display = "none";
}
fecharBtn.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// btn.onclick = function() {
//     modal.style.display = "flex"; // Torna o modal visível, usa 'flex' para centralizar
// }
