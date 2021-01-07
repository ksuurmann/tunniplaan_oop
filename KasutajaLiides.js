class KasutajaLiides {

    nadalaKuupaevad(tunniplaaniAndmed) {
        const nadalaAlgus = tunniplaaniAndmed.nadal;
        const nadalaPaevad = ['e', 't', 'k', 'n', 'r', 'l', 'p'];
        const nadal = {}
        let tananePaev = new Date(nadalaAlgus);
        for (let i = 0; i < nadalaPaevad.length; i++) {
            nadal[nadalaPaevad[i]] = tananePaev.toISOString().split('T')[0];
            const jargminePaev = new Date(tananePaev);
            jargminePaev.setDate(tananePaev.getDate() + 1);
            tananePaev = new Date(jargminePaev);
        }
        return nadal;
    }
}