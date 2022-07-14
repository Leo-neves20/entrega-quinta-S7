const products = [
  {
    title: "Uva Crimson",
    price: 8.99,
    category: "Frutas",
    image: undefined,
    imageDescription: "",
  },
  {
    title: "Banana",
    price: 5.69,
    category: "Frutas",
    image: "./img/products/product_2.svg",
    imageDescription: "",
  },
  {
    title: "Mamão",
    price: 4.99,
    category: "Frutas",
    image: "./img/products/product_3.svg",
    imageDescription: "",
  },
  {
    title: "Maçã",
    price: 9.2,
    category: "Frutas",
    image: "./img/products/product_4.svg",
    imageDescription: "",
  },
  {
    title: "Refrigerante",
    price: 8.99,
    category: "Bebidas",
    image: undefined,
    imageDescription: "",
  },
  {
    title: "Vinho",
    price: 8.99,
    category: "Bebidas",
    image: "./img/products/product_6.svg",
    imageDescription: "",
  },
  {
    title: "Água Tônica",
    price: 8.99,
    category: "Bebidas",
    image: undefined,
    imageDescription: "",
  },
  {
    title: "Água de coco",
    price: 8.99,
    category: "Bebidas",
    image: "./img/products/product_8.svg",
    imageDescription: "",
  },

  {
    title: "Sabonete",
    price: 8.99,
    category: "Higiene",
    image: "./img/products/product_9.svg",
    imageDescription: "",
  },

  {
    title: "Detergente",
    price: 8.99,
    category: "Higiene",
    image: "./img/products/product_10.svg",
    imageDescription: "",
  },

  {
    title: "Limpa superfícies",
    price: 8.99,
    category: "Higiene",
    image: "./img/products/product_11.svg",
    imageDescription: "",
  },

  {
    title: "Lustra Móveis",
    price: 8.99,
    category: "Higiene",
    image: undefined,
    imageDescription: "",
  },
];

let secFrutas   = document.querySelector(".fruits")
let secBebidas  = document.querySelector(".drinks")
let secHigiene  = document.querySelector(".hygiene")

let arrayFrutas   = []
let arrayBebidas  = []
let arrayHigiene  = []

let cardFrutas  = document.createElement("ul")
let cardBebidas = document.createElement("ul")
let cardHigiene = document.createElement("ul")

secFrutas.appendChild(cardFrutas)
secBebidas.appendChild(cardBebidas)
secHigiene.appendChild(cardHigiene)


for(let i = 0; i < products.length; i++){

  if(products[i].image == undefined){
  
    products[i].image = "./img/products/no-img.svg"
  
  }

  products[i].category == "Frutas" ? arrayFrutas.push(products[i]) : products[i].category == "Bebidas" ? arrayBebidas.push(products[i]) : arrayHigiene.push(products[i])

}

function infoProduto (listaProduto,ul){

  for(let i = 0; i < listaProduto.length; i++){
    
    let produtos = listaProduto[i]

    ul.append(criandoCard(produtos))
    

  }


}

infoProduto (arrayFrutas, cardFrutas)
infoProduto (arrayBebidas, cardBebidas)
infoProduto(arrayHigiene, cardHigiene)

function criandoCard(itens){

let li      = document.createElement("li")
let img     = document.createElement("img")
let h1      = document.createElement("h1")
let h5      = document.createElement("h5")
let strong  = document.createElement("strong")
let main    = document.createElement("main")

li.setAttribute("class", "product")
img.setAttribute("class", "product-img")
main.setAttribute("class","product-main")
h1.setAttribute("class","product-title")
h5.setAttribute("class","product-category")
strong.setAttribute("class", "product-price")
 
let imagem        = itens.image
let nome          = itens.title
let categoria     = itens.category
let valorProduto  = `R$ ${itens.price}`.replace(".",",")

img.src          = imagem
img.alt          = itens.imageDescription
h1.innerText     = nome
h5.innerText     = categoria
strong.innerText = valorProduto

main.append(h1, h5, strong)
li.append(img, main)

return li

}

