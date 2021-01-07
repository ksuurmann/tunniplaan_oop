class Tunniplaan {
    constructor(opetaja, kuupäev) {
        this.opetaja = opetaja;
        this.kuupäev = kuupäev;
    }

    async opetajaTunniplaaniAndmed() {
        const vastus = await fetch(
            "https://siseveeb.khk.ee/veebilehe_andmed/tunniplaan?opetaja=" +
            this.opetaja +
            "&nadal=" +
            this.kuupäev
        );
        const andmed = await vastus.json();
        return andmed;
    }
}