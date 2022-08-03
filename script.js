let numeros = [];

function inserirNumeros() {
  let insereNumero = document.getElementById("inserir").value;

  if (insereNumero == "") {
    alert("Insira números");
  } else {
    numeros.push(insereNumero);
  }
  document.getElementById("inserir").value = "";
  document.getElementById("numeros-adicionados").innerText =
    numeros.join(" | ");
}

function ordenarNumeros() {
  if (numeros == "") {
    alert("Insira números");
  } else {
    let numerosEspacados = numeros.sort(function (a, b) {
      return a - b;
    });
    document.getElementById("numeros-ordenados").innerText =
      numerosEspacados.join(" | ");
  }
}
