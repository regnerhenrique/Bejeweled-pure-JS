window.onload = function () {
    // Paramêtros
    const totalLinhas = 5;
    const totalColunas = 5;

    // Chamadas
    GerarArrayBolinha(totalLinhas, totalColunas, bolinhasTela);
    RenderizarTabuleiro();
    CheckarTabuleiro();
}
