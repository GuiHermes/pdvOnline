const produtos = [
    {
        id: 1,
        nome: "Arroz 5kg",
        preco: 28.90,
        estoque: 15,
        imagem: "https://dummyjson.com/image/300x200"
    },
    {
        id: 2,
        nome: "Feijão Carioca 1kg",
        preco: 8.50,
        estoque: 30,
        imagem: "https://dummyjson.com/image/300x200"
    },
    {
        id: 3,
        nome: "Macarrão Espaguete",
        preco: 4.99,
        estoque: 25,
        imagem: "https://dummyjson.com/image/300x200"
    },
    {
        id: 4,
        nome: "Óleo de Soja 900ml",
        preco: 7.89,
        estoque: 20,
        imagem: "https://dummyjson.com/image/300x200"
    },
    {
        id: 5,
        nome: "Açúcar Refinado 1kg",
        preco: 5.49,
        estoque: 40,
        imagem: "https://dummyjson.com/image/300x200"
    },
    {
        id: 6,
        nome: "Leite Integral 1L",
        preco: 4.79,
        estoque: 50,
        imagem: "https://dummyjson.com/image/300x200"
    },
    {
        id: 7,
        nome: "Coca-Cola 2L",
        preco: 10.99,
        estoque: 35,
        imagem: "https://dummyjson.com/image/300x200"
    },
    {
        id: 8,
        nome: "Biscoito Recheado",
        preco: 3.99,
        estoque: 50,
        imagem: "https://dummyjson.com/image/300x200"
    },
    {
        id: 9,
        nome: "Café Torrado 500g",
        preco: 18.90,
        estoque: 18,
        imagem: "https://dummyjson.com/image/300x200"
    },
    {
        id: 10,
        nome: "Sabão em Pó 1kg",
        preco: 12.49,
        estoque: 22,
        imagem: "https://dummyjson.com/image/300x200"
    },
    {
        id: 11,
        nome: "Detergente 500ml",
        preco: 2.99,
        estoque: 45,
        imagem: "https://dummyjson.com/image/300x200"
    },
    {
        id: 12,
        nome: "Papel Higiênico 12 Rolos",
        preco: 22.90,
        estoque: 28,
        imagem: "https://dummyjson.com/image/300x200"
    },
    {
        id: 13,
        nome: "Margarina 500g",
        preco: 7.50,
        estoque: 16,
        imagem: "https://dummyjson.com/image/300x200"
    },
    {
        id: 14,
        nome: "Queijo Mussarela 300g",
        preco: 14.90,
        estoque: 12,
        imagem: "https://dummyjson.com/image/300x200"
    },
    {
        id: 15,
        nome: "Presunto 300g",
        preco: 11.90,
        estoque: 14,
        imagem: "https://dummyjson.com/image/300x200"
    }

];

const carrinho = [];

const cardProdutos = document.getElementById('card-produtos');
const cardCheckout =document.getElementById('lista-checkout');
function render() {
    for (const produto of produtos) {
        cardProdutos.innerHTML += `<div class = "produto"><img src="${produto.imagem}" alt="foto Produto"><p>${produto.nome}</p><p>${produto.preco}</p><p>${produto.estoque}</p><button onclick="addCart(${produto.id})">Carrinho</button></div>`;
    };
};

function search() {
    const pesquisa = document.getElementById('insert-pesquisar').value;
    if (!pesquisa) {
        cardProdutos.innerHTML = "";
        render();
        return;
    }
    cardProdutos.innerHTML = "";
    for (const produto of produtos) {
        if (produto.nome.toLowerCase().includes(pesquisa.toLowerCase())) {
            cardProdutos.innerHTML += `<div class = "produto"><img src="${produto.imagem}" alt="foto Produto"><p>${produto.nome}</p><p>${produto.preco}</p><p>${produto.estoque}</p></div>`;
        };
    };
};

function addCart(id) {
    const produto = produtos.find(p => p.id === id);
    carrinho.push(produto);
    cardCheckout.innerHTML += `<li>${produto.id} - ${produto.nome} - ${produto.preco}</li>`
    console.log(carrinho)
}


function clearCheck(){
    cardCheckout.innerHTML = "";
}

render();