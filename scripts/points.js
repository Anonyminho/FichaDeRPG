function setPoint(id) {
    switch (id) {
        case 0:
            valoresAdd(5, 10, 10, 50, 5, 10)
            break;
        case 1:
            valoresAdd(15, 5, 5, 0, 20, 50)
            break;
        case 2:
            valoresAdd(20, 5, 5, 0, 5, 15)
            break;
    }
}

function valoresAdd(str, agi, dex, int, car, vit) {
    var sum = str + agi + dex + int + car + vit
    var labels = document.querySelectorAll(".pontosAtt");

    document.getElementById("pts").innerText = 100 - sum

    labels[0].innerText = str
    labels[1].innerText = agi
    labels[2].innerText = dex
    labels[3].innerText = int
    labels[4].innerText = car
    labels[5].innerText = vit
}

function changeValue(value, id) {
    var forca;
    var agilidade;
    var vitalidade;
    var inteligencia;
    var carisma;
    var destreza;
    forca = Number(document.getElementById("forca").textContent)
    agilidade = Number(document.getElementById("agilidade").textContent)
    destreza = Number(document.getElementById("destreza").textContent)
    inteligencia = Number(document.getElementById("inteligencia").textContent)
    vitalidade = Number(document.getElementById("vitalidade").textContent)
    carisma = Number(document.getElementById("carisma").textContent)

    var soma = forca + agilidade + destreza + inteligencia + vitalidade + carisma
    var labels = document.querySelectorAll(".pontosAtt");
    var valor = parseInt(labels[id].textContent)
    valor += value
    if ((valor >= 0 && valor <= 100 && soma < 100) || (soma == 100 && value < 0)) {
        if (document.getElementById("pts").textContent >= 0) {
            labels[id].innerText = valor
            pontosSobrando(value)
        }
    }
}

function pontosSobrando(pts) {
    var sobrando = Number(document.getElementById("pts").textContent)
    if(sobrando >= 0 && sobrando <= 100){
        document.getElementById("pts").innerText = sobrando - pts
    }
}
