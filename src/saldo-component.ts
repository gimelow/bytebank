let saldo : number = 3000;

const elementoSaldo = document.querySelector(".saldo-valor .valor") as HTMLElement;
const elementoDataAcesso = document.querySelector(".block-saldo time") as HTMLElement;

if (elementoSaldo != null) {
    elementoSaldo.textContent = saldo.toLocaleString("pt-BR", {style: "currency", currency: "BRL"});
}

if (elementoDataAcesso != null) {
    elementoDataAcesso.textContent = new Date().toLocaleString("pt-BR", {
        weekday: "long",
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
    });
}