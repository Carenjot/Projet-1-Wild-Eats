 class Restaurant {
        //todo Mise en place du tableau
        
            constructor(name, type, desc, img, available) {
                this.name = name ;
                this.type = type;
                this.desc = desc;
                this.img = img;
                this.available = available;
        
            }
        }
        
        
        const CardsRestaurant = [
            new Restaurant(
                "Shiva Restaurant",
                "Indien",
                "Shiva est un Restaurant traditionnel indien, Venez Savourer un bon repas en Famille ou Entre Amis dans une bonne Ambiance. ",
                "https://d1ralsognjng37.cloudfront.net/69277296-3b33-4d6b-8a19-a7fc1bb916bc.jpeg",
                true
                    ),
            {
                name: "Pizzeria L'antica",
                type: "Italien",
                desc: " La pizzeria L'Antica, située en plein coeur du centre-ville de Reims à quelques pas de la cathédrale, vous propose des pizzas 100% artisanales à la qualité irréprochable et aux saveurs authentiques.  Tous nos produits sont frais, sélectionnés avec soin, préparés et cuisinés dans notre restaurant. Notre pâte à pizza est fabriquée quotidiennement avec une farine de qualité. ",
                img:  "https://media-cdn.tripadvisor.com/media/photo-s/05/56/7f/32/une-tuerie-la-meilleure.jpg",
                available: true
            },
            {
                name: "Shin'zen Restaurant Japonais",
                type: "Japonais",
                desc: " Souhaitez-vous embarquer vos amis ou collègues dans une aventure culinaire exceptionnelle ? Rassemblez-les et partez à la découverte de Shin’zen.",
                img: "https://media-cdn.tripadvisor.com/media/photo-s/11/4b/15/42/la-salle-du-restaurant.jpg",
                available:true
        
            },
            {
                name:"Vapeurs Et Gourmandises",
                type:"Veggie",
                desc:"Depuis 2012, Vapeurs et gourmandises vous propose une cuisine gourmande à la vapeur. Produits frais, saveurs, couleurs et fait maison sont au rendez-vous. Faites vous une autre idée de la vapeur",
                img: "https://media-cdn.tripadvisor.com/media/photo-s/14/13/0b/06/saumon.jpg",
                available:true 
            },
            {
                name: "George's",
                type:"Restaurant Bistro",
                desc: "The Georges est un bar localisé dans la ville de Reims. Ce lieu est situé à l’intersection de la place du Forum et de la rue Pluche, dans le vieux Centre-Ville. Vous pouvez vous repérer depuis le square Charles Sarazin, juste en face de ce bar. Profitez de ce lieu à plusieurs références de vins, alcool et menus pour apprécier le moment en famille",
                img: "https://scontent-mrs2-1.xx.fbcdn.net/v/t39.30808-6/312349732_650456683308227_1613571026087111917_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=19026a&_nc_ohc=01iUhcMI2bAAX-C253t&_nc_ht=scontent-mrs2-1.xx&oh=00_AfBpBC6w5sJfCwYZq_Yw-jb7r-rZZc7cKLZ-ac6nKyKh2A&oe=641F77C1",
                available: true
            },
            {
                name: "Le Crypto",
                type: "Cuisine Française",
                desc: "Restaurant élégant avec nappes blanches et étagères de bouteilles de vin, servant plats français classiques et menu déjeuner fixe.",
                img: "https://media-cdn.tripadvisor.com/media/photo-s/17/bf/c4/7a/delicieux.jpg",
                available:true
            }
        ];
      

        function createCard(restaurant){
            console.log(restaurant);
            return `
            </article>
              <article class="card-resto">
                <img src=${restaurant.img} class="img-resto">
                <aside>
                  <h3 class="nom-resto">${restaurant.name}</h3>
                  <p class="description-resto">
                   ${restaurant.desc}
                  </p>
                 
                </aside>
                `;
        
        }
        
       


function CreatedAllCards (filter) {
    let cards = "";
  

  for (let i = 0; i < CardsRestaurant.length; i++) {
    if(filter == null || CardsRestaurant[i].name.startsWith(filter) ) {
     cards   += createCard(CardsRestaurant[i]);
    } }
    return cards;
  }

/*   document.querySelector(".search-input").addEventListener("change", () => {
    const filter = document.querySelector(".search-input").value;
    document.querySelector(".list-resto").innerHTML = CreatedAllCards(filter);
    });
 */
    document.querySelector(".list-resto").innerHTML = CreatedAllCards();

   