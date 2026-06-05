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
        id: 5,
        nome: "Açúcar Refinado 1kg",
        preco: 5.49,
        estoque: 40,
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
        id: 5,
        nome: "Açúcar Refinado 1kg",
        preco: 5.49,
        estoque: 40,
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
        id: 5,
        nome: "Açúcar Refinado 1kg",
        preco: 5.49,
        estoque: 40,
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
        id: 5,
        nome: "Açúcar Refinado 1kg",
        preco: 5.49,
        estoque: 40,
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
        id: 5,
        nome: "Açúcar Refinado 1kg",
        preco: 5.49,
        estoque: 40,
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
        id: 5,
        nome: "Açúcar Refinado 1kg",
        preco: 5.49,
        estoque: 40,
        imagem: "https://dummyjson.com/image/300x200"
    },
    {
        id: 5,
        nome: "Açúcar Refinado 1kg",
        preco: 5.49,
        estoque: 40,
        imagem: "https://dummyjson.com/image/300x200"
    }
    
];
const cardProdutos = document.getElementById('card-produtos');

for(const produto of produtos){
    cardProdutos.innerHTML += `<div class = "produto"><img src="${produto.imagem}" alt="foto Produto"><p>${produto.nome}</p><p>${produto.preco}</p><p>${produto.estoque}</p></div>`
};