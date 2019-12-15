class Bolinha{
    constructor(linha, coluna){
        this.Id = `linha-${linha}-coluna-${coluna}`
        this.Linha = linha;
        this.Coluna = coluna;
        this.Cor = GerarCor();
        this.Boom = false;
    }
}
