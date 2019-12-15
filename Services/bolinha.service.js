var boomCount = 0;

function GerarCor() {
    let cores = ["red", "blue", "green", "black", "purple"]
    let numero = Math.floor((Math.random() * cores.length));

    return cores[numero];
}

function GerarArrayBolinha(totalLinhas, totalColunas, bolinhasTela) {
    for (let linha = 0; linha < totalLinhas; linha++) {
        var linhaBolinhas = [];
        for (let coluna = 0; coluna < totalColunas; coluna++) {
            linhaBolinhas.push(new Bolinha(linha, coluna));
        }
        bolinhasTela.push(linhaBolinhas);
    }
}

function EstourarBolinhas(bolinhasBoom) {
    bolinhasBoom.forEach(bolinha => {
        let bolinhaDiv = window.document.querySelector("#" + bolinha.Id);
        bolinhaDiv.classList.add("boom");
        bolinhasTela[bolinha.Linha][bolinha.Coluna].Boom = true;
    });
}