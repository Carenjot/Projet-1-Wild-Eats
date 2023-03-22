//Listes des restaurants

class restaurant {
  constructor(name, type, desc, img) {
    this.name = name;
    this.type = type;
    this.desc = desc;
    this.img = img;
  }
}

const restoDispo = [
  new restaurant(
    "Exemple Nom Restaurant",
    "Restaurant",
    "Description produit / Spécialité(s) du restaurant",
    "img/img-resto-quatre.jpg"
  ),
  {
    name: "Exemple Nom Restaurant deux",
    type: "Restaurant",
    desc: "Description produit / Spécialité(s) du restaurant",
    img: "./img/img-resto-un.jpg",
  },
  {
    name: "Exemple Nom Restaurant trois",
    type: "Restaurant",
    desc: "Description produit / Spécialité(s) du restaurant",
    img: "img/img-resto-deux.jpg",
  },
  {
    name: "Exemple Nom Restaurant quatre",
    type: "Restaurant",
    desc: "Description produit / Spécialité(s) du restaurant",
    img: "img/img-resto-trois.jpg",
  },
  {
    name: "Exemple Nom Restaurant trois",
    type: "Restaurant",
    desc: "Description produit / Spécialité(s) du restaurant",
    img: "img/img-resto-deux.jpg",
  },
  {
    name: "Exemple Nom Restaurant quatre",
    type: "Restaurant",
    desc: "Description produit / Spécialité(s) du restaurant",
    img: "img/img-resto-trois.jpg",
  },
];

//Create cards

function CreateCard(restaurant) {
  return `
         <article class="card-resto">
           <img src=${restaurant.img} class="img-resto"/>
           <aside>
             <h3 class="nom-resto">${restaurant.name}</h3>
             <p class="description-resto">${restaurant.desc}</p>
           </aside>
         </article>
    `;
}

//Index.js

function createAllCards() {
  let cards = "";

  for (let i = 0; i < restoDispo.length; i++) {
    cards += CreateCard(restoDispo[i]);
  }

  return cards;
}

document.querySelector(".list-resto").innerHTML = createAllCards();
