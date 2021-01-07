
//Tunniplaani objekt
const tunniplaan = new Tunniplaan(346, '2021-01-11');

// Kasutajaliidese objekt
const kl = new KasutajaLiides();

// Tunniplaani väljastamine
document.addEventListener('DOMContentLoaded', valjastaTunniplaan);

function valjastaTunniplaan() {
    tunniplaan.opetajaTunniplaanAndmed().then(tunnid => {
        kl.printNadalaKuupaevad(kl.nadalaKuupaevad(tunnid));
        kl.print(tunnid);
    }).catch(viga => console.log(viga));
}