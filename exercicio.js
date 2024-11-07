
class Bebida {
    constructor(nome, preco, volume) {
        this.nome = nome;
        this.preco = preco;
        this.volume = volume;
    }

    exibirInfo() {
        console.log(`Bebida: ${this.nome}, Volume: ${this.volume}ml, Preço: R$${this.preco}`);
    }
}

const bebida1 = new Bebida("Refrigerante", 5.00, 350);
const bebida2 = new Bebida("Suco de Laranja", 8.50, 500);
const bebida3 = new Bebida("Água Mineral", 3.00, 500);

bebida1.exibirInfo();
bebida2.exibirInfo();
bebida3.exibirInfo();

function adicionarAoCarrinho(bebida) {
    console.log(`Você adicionou ${bebida.nome} ao carrinho!`);
    console.log(`Valor total é de R$:${bebida.preco}`)
}

adicionarAoCarrinho(bebida2);