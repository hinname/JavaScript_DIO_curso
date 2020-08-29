function clicado(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    //alert("Obrigado por clicar");
}

function redirecionar(){
    //window.open("https://github.com/hinname/JavaScript_DIO_curso");
    window.location.href = "https://github.com/hinname/JavaScript_DIO_curso";
    return false
}

function trocar(element){
    element.innerHTML = "Obrigado por passar o mouse";
    //alert("trocar texto")
}

function voltar(element){
    element.innerHTML = "Passe o mouse aqui";
}

function load()
{
    alert('pagina carregada')
}

function funcaoChange(element){
    console.log(element.value);
}


/*
function soma (n1,n2){
    return n1 + n2;
}
*/

/*
function setReplace(frase, nome, novo_nome) {
    return frase.replace(nome, novo_nome)
}

var validar = 0
function validaIdade(idade){
    var validar;
    if (idade >= 18){
        validar = true
    }
    else
    {
        validar = false
    }
    return validar
}

var idade = prompt("Qual sua idade? ");
console.log(validaIdade(idade));
console.log(validar)

alert(soma(5,10));
/*


//var d = new Date()
//alert(d.getDate());
//alert(d.getMonth()+1); //começa a contar do 0
//alert(getMonth());


/*
var count;
for(count=0; count <= 5; count ++)
{
    alert(count);
}
*/

/*
var count = 0;
while (count <= 5){
    console.log(count);
    count++;
}
*/


/*
var idade = prompt("Qual sua idade");

if (idade > 18)
{
    alert('maior de idade');
}
else
{
    alert('menor de idade');
}
*/


//var frutas = [{nome: "maça", cor:"vermelha"}, {nome: "uva", cor:"roxa"}];
//console.log(frutas);
//console.log(frutas[1].cor);



//var lista = ["maça", "pêra", "laranja"];
//lista.push("uva");
//lista.pop();
//console.log(lista[0]);
//console.log(lista.length);
//console.log(lista.reverse());
//console.log(lista.toString());
//console.log(lista.join(" - "));


//var nome = "Herivelton";
//var idade = 18;
//var idade = 2;
//var frase = 'Melhor Jhin do BR';
//alert(nome + " tem " + idade + " anos");
//console.log(frase.replace("BR", "KR")); //mudar parte de uma string
//console.log(frase.toUpperCase());
//console.log(frase.toLowerCase());


