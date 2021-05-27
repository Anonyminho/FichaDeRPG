if (window.localStorage.getItem('lista')) {
    lista = window.localStorage.getItem('lista').split('},{');
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
        window.localStorage.setItem('lista', lista);
        window.location = "personagem.html"
    } else if (id == 1) {
        window.localStorage.setItem('lista', lista);
        window.location = "index.html"
    }
}

for (let i = 0; i < lista.length; i++) {
    createButtons(i)
}

function createButtons(id) {
    
    if(lista.length == 0) {
        document.getElementById("qntdPersonagens").innerText = `Você não tem personagens ainda.`
    } else if(lista.length == 1) {
        document.getElementById("qntdPersonagens").innerText = `Você tem 1 personagem`
    } else {
        document.getElementById("qntdPersonagens").innerText = `Você tem ${lista.length} personagens`
    }
    document.getElementById("personagemButton").innerHTML +=
        `<button id="personagem${id}" class="botao" onclick="showCaract(${id})">
            Mostrar Personagem ${id}
         </button>`
}

function showCaract(id) {
    document.getElementById("showPerso").innerHTML =
        `
            Nome: ${JSON.parse(lista[id]).nome}<br>Idade: ${JSON.parse(lista[id]).idade}<br>Classe: ${JSON.parse(lista[id]).classe}
        `
}
