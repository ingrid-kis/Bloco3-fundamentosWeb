/* 
Linguagem Case Sensitive

Variáveis:
var, let e const -> mais usado let

É possível acessar DOM por:
Tag: getElementByTagName()
Id: getElementById()
-- nome e classe podem ser usados em várias tags, por isso elementS --
Nome: getElementsByName()
Classe: getElementsByClass()
Seletor: querySelector() --> é a atualização do JS, melhor prática para acessar DOM
*/

//Variáveis Principais
let nome = window.document.getElementById("nome");

let email = document.querySelector("#email"); //ou ("input#email")

let assunto = document.querySelector("#assunto");

let nomeOk = false;

let emailOk = false;

let assuntoOk = false;

let mapa = document.querySelector("#mapa")

//Acesso ao DOM
nome.style.width = "100%";

email.style.width = "100%";

assunto.style.width = "100%";

//Funções
function validaNome() {
    let txtNome = document.querySelector("#txtNome");

    if (nome.value.length < 3) {
        txtNome.innerHTML = "Nome Inválido";
        txtNome.style.color = "red";
    } else {
        txtNome.innerHTML = "Nome Válido";
        txtNome.style.color = "green";
        nomeOk = true;
        }
}

function validaEmail() {
    let txtEmail = document.querySelector("#txtEmail");

    if (email.value.indexOf("@") == -1 || email.value.indexOf(".")) {
        txtEmail.innerHTML = "E-mail Inválido";
        txtEmail.style.color= "red";
    } else {
        txtEmail.innerHTML = "E-mail Válido";
        txtEmail.style.color = "green";
        emailOk = true;
    }
}

function validaAssunto() {
    let txtAssunto = document.querySelector("#txtAssunto");

    if (assunto.value.length >=140) {
        txtAssunto.innerHTML = "Texto grande, digite até 140 caracteres";
        txtAssunto.style.color = "red";
        txtAssunto.style.display = "block"; //não funciona pq??
    } else {
        txtAssunto.style.display = "none";
        assuntoOk = true;
    }
}

function enviar() {
    if (nomeOk == true && emailOk == true && assuntoOk == true) {
        alert ("Formulário enviado com Sucesso");
    } else {
        alert ("Preencha todos os campos antes de enviar");
    }
}

function mapaZoom(){ //não funciona pq??
    mapa.style.width = "50rem";
    mapa.style.height = "37.5rem";
}

function mapaNormal(){ //não funciona pq??
    mapa.style.width = "400px";
    mapa.style.height = "350px";
}
}