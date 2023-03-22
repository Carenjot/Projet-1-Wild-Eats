//Listes des restaurants
class restaurant {
  constructor(restaurant,desc, adresse, link, image) {
      this.restaurant = restaurant;
      this.desc = desc;
      this.adresse = adresse;
      this.link = link;
      this.image = image;
  }
}
const restoDispo = [
  new restaurant (
      " L’Expérience",
      " Restaurant rémois au concept novateur, l’Expérience privilégie le partage autour de l’assiette!",
      " 83 Place Drouet d’Erlon",
      " https://www.lexperience-reims.fr/",
      " img/lexperience.png",
  ),
{
      restaurant: "L’Alambic",
      desc: "L’Alambic est un restaurant des terroirs où les assiettes raviront vos papilles, vos yeux ainsi que votre appétit.",
      adresse: "63 bis, rue de Chativesle",
      link: "https://www.restaurant-lalambic.fr/",
      image: "img/lalambic.png",
  },
{
      restaurant: "Green sur mesure",
      desc: "Green sur mesure est le premier concept convivial et sain. Salades, pâtes, sandwichs, pokés, soupes : chacun peut composer son repas chaud ou froid à partir des nombreuses bases et ingrédients frais proposés chaque jour.",
      adresse: "4 Bis rue Gaston Boyer",
      link: "https://www.greensurmesure.fr/le-concept/",
      image: "img/greensurmesure.png",
  },
{
      restaurant: "Koboon",
      desc: "Pad Thaï, Wok bœuf Koh Tao, Nasi goreng à la mode Thaï... dégustez une diversité de saveurs typiquement thaïlandaises en provenance de Bangkok, Phuket.",
      adresse: "9, boulevard du Général Leclerc",
      link: "https://www.koboon-resto.fr/",
      image: "img/koboon.png",
  },
  {
      restaurant: "Come Prima",
      desc: "Une échappée italienne au cœur de la Cité des Sacres. Une cuisine authentique. Chacun de nos plats est cuisiné maison.",
      adresse: "3 rue Buirette",
      link: "https://come-prima-reims.eatbu.com/?lang=fr",
      image: "img/comeprima.png",
  },
      {
      restaurant: "L’Oriental",
      desc: "Véritable dépaysement, pour vos sorties entre ami(e)s ou déjeuners professionnels, ainsi que vos événements.",
      adresse: "13 rue Gerbert",
      link: "http://restaurant-couscous-reims.com/",
      image: "img/loriental.png",
  }
];
//Create cards
function CreateCard(restaurant) {
  return `
       <article class="card-resto">
         <img src=${restaurant.image} class="img-resto"/>
         <aside>
           <h3 class="nom-resto">${restaurant.restaurant}</h3>
           <p class="description-resto">${restaurant.desc}</p>
         </aside>
       </article>
  `
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
