if (localStorage.getItem('lista')) {
    lista = localStorage.getItem('lista').split('},{');
}
for (var c = 0; c < lista.length; c++) {
    if (lista[c][0] != '{') {
        lista[c] = '{' + lista[c];
    }

    if (lista[c][lista[c].length - 1] != '}') {
        lista[c] += '}';
    }
}

function back(id) {
    if (id == 0) {
        localStorage.setItem('lista', lista);
        window.location = "personagem.html"
    } else if (id == 1) {
        localStorage.setItem('lista', lista);
        window.location = "index.html"
    }
}

for (let i = 0; i < lista.length; i++) {
    createButtons(i)
}

function createButtons(id) {
    if (lista.length >= 2) {
        document.getElementById("qntdPersonagens").innerText = `Você tem ${lista.length} personagens`
    } else if (lista.length == 1) {
        document.getElementById("qntdPersonagens").innerText = `Você tem 1 personagem`
    } else if(!lista) {
        document.getElementById("qntdPersonagens").innerText = `Você não tem personagens ainda.`
    }
    document.getElementById("personagemButton").innerHTML +=
        `<button id="personagem${id}" class="botao" onclick="showCaract(${id})">
            Mostrar Personagem ${id}
         </button>`
}
if(document.getElementsByClassName("botao")){
    document.getElementById("button").innerHTML += 
    `<button id="excluir" onclick="excluir()">
        Excluir todos os personagens
        </button>
    `
}
function showCaract(id) {
    document.getElementById("showPerso").innerHTML =
        `<section id="caracts">
            Nome: ${JSON.parse(lista[id]).nome}<br>Idade: ${JSON.parse(lista[id]).idade}<br>Classe: ${JSON.parse(lista[id]).classe}
        </section>
        `
}

function excluir() {
    localStorage.removeItem("lista")
}