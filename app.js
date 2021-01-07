
// Tunniplaani objekt
const tunniplaan = new Tunniplaan(346, "2021-01-04");

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