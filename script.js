let numeros = [];

function inserirNumeros() {
    let insereNumero = document.getElementById('inserir').value;

    if (insereNumero == "") {
        alert("Insira um número");
    } else {
        numeros.push(insereNumero);
    }
    document.getElementById('inserir').value = "";
    document.getElementById('numeros-adicionados').innerText = numeros.join(" | ");
}

function ordenarNumeros() {
    let numerosEspacados = numeros.sort(); 
    document.getElementById('numeros-ordenados').innerText = numerosEspacados.join(" | ");
}