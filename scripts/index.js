var lista = [];
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

var pathImgs = [
    "../img/mago.png",
    "../img/guerreiro.png",
    "../img/paladino.jpg"
];


function classeDef(id) {
    var img = document.getElementById("sapo");
    img.src = pathImgs[id]
    img.style.marginRight = "55px"
    img.style.width = "200px"
    setPoint(id)
}

function randInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
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
function main() {
    let nome;
    let nasc;
    let idade;
    let atributo
    let atributos;
    let classe;
    let classes;
    let personagem;
    let habilidades;
    let habList;

    habilidades = []
    habList = ["salto_longo","resistencia","furtividade","precisao","esquiva","percepcao"]
    personagem = {}
    nome = document.getElementById('name').value;

    if (!nome.length) {
        let vogais;
        let conso;
        let nomeLen;

        nome = '';
        vogais = ['a', 'e', 'i', 'o', 'u'];
        conso = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm',
            'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];

        nomeLen = randInt(3, 5);

        if (nomeLen == 3) {
            nome = conso[randInt(0, conso.length - 1)]
                + vogais[randInt(0, vogais.length - 1)]
                + vogais[randInt(0, vogais.length - 1)];
        } else if (nomeLen == 4) {
            nome = conso[randInt(0, conso.length - 1)]
                + vogais[randInt(0, vogais.length - 1)]
                + conso[randInt(0, conso.length - 1)]
                + vogais[randInt(0, vogais.length - 1)];
        } else {
            nome = conso[randInt(0, conso.length - 1)]
                + vogais[randInt(0, vogais.length - 1)]
                + conso[randInt(0, conso.length - 1)]
                + vogais[randInt(0, vogais.length - 1)]
                + vogais[randInt(0, vogais.length - 1)];
        }
    } else if (nome.length < 3) {
        alert('Tamanho de nome insuficente')
    }

    nasc = document.getElementById('bornDate').value;
    nasc = parseInt(nasc.split("-")[0]);
    idade = 2021 - nasc;

    if (idade) {
        idade = randInt(17, 60);
    }

    classes = ['mago', 'guerreiro', 'paladino'];
    for (count = 0; count < classes.length; count++) {
        if (document.getElementById(classes[count]).checked) {
            classe = classes[count];
            break;
        }
    }

    atributo = [];
    atributos = ['forca', 'agilidade', 'destreza',
        'inteligencia', 'carisma', 'vitalidade'];

    for (var count = 0; count < atributos.length; count++) {
        atributo.push(
            parseInt(document.getElementById(atributos[count]).innerText)
        );
    } 
    for (var count = 0; count < habList.length; count++) {
        if(document.getElementById(habList[count]).checked){
            habilidades.push(`${habList[count]},`)
        }
    }

    personagem.nome = nome;
    personagem.idade = idade;
    personagem.classe = classe;
    personagem.atributo = atributo;
    personagem.habilidade = habilidades;

    lista.push(JSON.stringify(personagem));

    window.localStorage.setItem('lista', lista);
}

