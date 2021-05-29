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
    var att = [str, agi, dex, int, car, vit]
    var sum = str + agi + dex + int + car + vit
    var labels = document.querySelectorAll(".pontosAtt");

    document.getElementById("pts").innerText = 100 - sum
    for(let i = 0; i < att.length; i++){
        labels[i].innerText = att[i]
    }
}

function changeValue(value, id) {
    var att = ["forca", "agilidade", "destreza", "inteligencia", "vitalidade", "carisma"];
    var soma;
    var labels = document.querySelectorAll(".pontosAtt");
    var valor = parseInt(labels[id].textContent);
    
    for(let count = 0; count < att.length; count++){
        att[count] = Number(document.getElementById(att[count]).textContent)
    }

    soma = att[0] + att[1] + att[2] + att[3] + att[4] + att[5]
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
