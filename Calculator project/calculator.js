function adicionar(valor) {
    document.getElementById("tela").value += valor;
}
function calcular() {
    try {
        document.getElementById("tela").value = eval(document.getElementById("tela").value);
    } catch {
        document.getElementById("tela").value = "Erro";
    }
}
function limpar() {
    document.getElementById("tela").value = "";
}