
// Tunniplaani objekt
const tunniplaan = new Tunniplaan(346, '2019-04-01');

// Kasutajaliidese objekt
const kl = new KasutajaLiides();

// Tunniplaani väljastamine
document.addEventListener("DOMContentLoaded", valjastaTunniplaan);
function valjastaTunniplaan() {
    tunniplaan
        .opetajaTunniplaaniAndmed()
        .then((tunnid) => {
            console.log(tunnid);
        })
        .catch((viga) => console.log(viga));
}