// tunniplaani objekt
const tunniplaan = new Tunniplaan(opetaja, kuupaev);

// kasutajaliidese objekt
const kl = new Kasutajaliides();



function Andmed() {
    tunniplaan.opetaja = document.getElementById("opetajaid").value;
    tunniplaan.kuupaev = document.getElementById("kuupaevid").value;
    valjastaTunniplaan();
}
// opetaja = 346;
// kuupaev = "2021-01-11";

//Muuda õpetajat
const changeBtn = document.querySelector('#muudaOpetaja');
changeBtn.addEventListener('click', muudaOpetaja);

function muudaOpetaja() {
    const opetaja = document.querySelector('#opetajaid').value;
    opetaja.muudaOpetaja(nimi);
    valjastaTunniplaan();
    $('#muudaOpetaja').modal('hide');
}



// tunniplaani väljastamine
document.addEventListener("DOMContentLoaded", valjastaTunniplaan);
function valjastaTunniplaan() {
    tunniplaan
        .opetajaTunniplaaniAndmed()
        .then((tunnid) => {
            kl.printNadalaKuupaevad (kl.nadalaKuupaevad(tunnid));
            kl.print(tunnid);
        })
        .catch((viga) => console.log(viga));
}