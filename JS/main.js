function clicou(){
    //alert("Obrigado por clicar!");
    document.getElementById("valeu").innerHTML = "<b>Abrir YouTube</b>";
}

function redir() {
    window.open("https://www.youtube.com/");
}

function trocar(elemento) {
    elemento.innerHTML = "Obrigado por passar o mouse";
}

function voltar(elemento) {
    elemento.innerHTML = "PASSE O MOUSE AQUI...";
}
/*
function soma(n1, n2) {
    return n1 + n2;
}

function validaIdade(idade) {
    var validar;
    if (idade >= 18){
        validar = "Maior de idade"
    } else {
        validar = "Menor de idade"
    }
    return validar;
}

var  idade = 16;
console.log(validaIdade(idade));
*/

//console.log(soma(5, 15));

/*
var nome = "João Paulo Gomes";
var idade = 39;
var idade2 = 10;
var frase = "Japão é o melhor time do mundo"

//alert(nome + " tem " + idade + " anos.");
//alert( idade + idade2);
console.log(nome);
console.log(idade);
console.log(frase.replace("Japão", "Brasil") );
*/

//var lista = ["maçã", "pêra", "laranja"];
//lista.push("uva");
//lista.pop();
//console.log(lista);
//console.log(lista.toString());
//console.log(lista.join(" | "));

//var fruta = {nome:"maçã", cor:"vermelha"}
//console.log(fruta.cor)

/*
var frutas = [{nome:"maçã", cor:"vermelha"}, {nome:"uva", cor:"roxa"}];
console.log(frutas);
console.log(frutas[1].nome);
*/
/*
var idade = 17;

if (idade >= 18) {
    console.log("Maior de idade");
} else {
    console.log("Menor de idade");
};
*/

/*
var count = 1;
while (count <= 5) {
    console.log(count);
    count++;
};
*/

/*
var count=0;

for (count=0; count <= 6; count += 1.75) {
    console.log(count.toFixed(2));
};
*/

/*
var dataAtual = new  Date();
console.log(dataAtual.getMonth() + 1);
*/