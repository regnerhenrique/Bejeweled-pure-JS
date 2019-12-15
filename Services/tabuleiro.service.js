var bolinhasTela = [];

function RenderizarTabuleiro() {

    bolinhasTela.forEach(function (bolinhaArray, index) {
        const linhaId = `linha-${index}`;
        CriarLinha(linhaId)
        bolinhaArray.forEach(bolinha => {
            CriarBolinha(linhaId, bolinha)
        });
    });

}
function CriarLinha(linhaId) {
    const screen = window.document.querySelector("#screen");
    const linhaDiv = document.createElement("div");

    linhaDiv.setAttribute("id", linhaId);
    linhaDiv.classList.add("linha");

    screen.appendChild(linhaDiv);
}

function CriarBolinha(linhaId, bolinha) {
    const linhaDiv = window.document.querySelector("#" + linhaId);
    const bolinhaDiv = document.createElement("div");

    bolinhaDiv.classList.add("bolinha");
    bolinhaDiv.classList.add(bolinha.Cor);
    bolinhaDiv.setAttribute("id", bolinha.Id);

    linhaDiv.appendChild(bolinhaDiv)
}

function CheckarTabuleiro() {
    bolinhasTela.forEach(bolinhaLinha => bolinhaLinha.forEach(bolinha => CheckarVizinhos(bolinha)));
    ReposicionarBolinhas();
}

function CheckarVizinhos(bolinha) {
    if (bolinha == null)
        return;

    let bolinhasBoom = []
    bolinhasBoom.push(bolinha);

    // Cima
    if (bolinha.Linha > 0 && bolinhasTela[bolinha.Linha - 1][bolinha.Coluna] != null && bolinhasTela[bolinha.Linha - 1][bolinha.Coluna].Cor === bolinha.Cor)
        bolinhasBoom.push(bolinhasTela[bolinha.Linha - 1][bolinha.Coluna]);

    // Baixo
    if (bolinha.Linha < (bolinhasTela.length - 1) && bolinhasTela[bolinha.Linha + 1][bolinha.Coluna] != null && bolinhasTela[bolinha.Linha + 1][bolinha.Coluna].Cor === bolinha.Cor)
        bolinhasBoom.push(bolinhasTela[bolinha.Linha + 1][bolinha.Coluna]);

    // Esquerda
    if (bolinha.Coluna > 0 && bolinhasTela[bolinha.Linha][bolinha.Coluna - 1] != null && bolinhasTela[bolinha.Linha][bolinha.Coluna - 1].Cor === bolinha.Cor)
        bolinhasBoom.push(bolinhasTela[bolinha.Linha][bolinha.Coluna - 1]);

    // Direita
    if (bolinha.Coluna < (bolinhasTela[bolinha.Linha].length - 1) && bolinhasTela[bolinha.Linha][bolinha.Coluna + 1] != null && bolinhasTela[bolinha.Linha][bolinha.Coluna + 1].Cor === bolinha.Cor)
        bolinhasBoom.push(bolinhasTela[bolinha.Linha][bolinha.Coluna + 1]);

    if (bolinhasBoom.length > 2)
        EstourarBolinhas(bolinhasBoom)
}

function ReposicionarBolinhas() {
    bolinhasTela.forEach(x => {
        let bolinhasEstouradas = x.filter(y => y.Boom === true)
        if (bolinhasEstouradas.length > 0) {
            bolinhasEstouradas.forEach(y => {
                console.log(y);
                if(y.Linha > 0){
                    console.log("Emcima: " + bolinhasTela[y.Linha-1][y.Coluna].Cor)
                }

            })
        }
    });
}