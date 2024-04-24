let cardsArray  = [
    {
        "name": "Mazhar",
        "img": "./logos/Mazhar.png",
    },
  
    {
        "name": "JS",
        "img": "./logos/js.png",
    },
    {
        "name": "Node",
        "img": "./logos/node.png",
    },
     {
        "name": "Python",
        "img":"./logos/python.png" ,
    },
    {
        "name": "flower",
        "img":"./logos/flower.png" ,
    },
    {
        "name": "Hassan",
        "img": "./logos/Hassan.png",
    },
   

];

const parentDiv = document.querySelector("#card-section");

// Step 2: to duplicate each card
const gameCards = cardsArray.concat(cardsArray);
// console.log(gameCards);

// Step 3: Note that this method Creates a new Shuffled array instead of modifying the original one.

let shuffledChild = Array.from(gameCards).sort(() => 0.5 - Math.random());
console.log(shuffledChild)

let clickCount = 0;
let firstCard = "";
let secondCard = "";

// Styling the matches Card

const card_matches = () => {
    let card_selected = document.querySelectorAll(".card_selected");
 
    card_selected.forEach((curElm) => {
         curElm.classList.add("card_match")
    })
 }
 
 // Step 7
 
 const resetGame = () => {
   firstCard = "";
   secondCard = "";
   clickCount = 0;
 
   let card_selected = document.querySelectorAll(".card_selected");
 
   card_selected.forEach((curElm) => {
        curElm.classList.remove("card_selected")
   })
 
 }

 
 
 // Step 4
 
 parentDiv.addEventListener('click', (Event) => {
     let curCard = event.target;
     if(curCard.id === "card-section"){
       return false;
     }
       clickCount ++;
 
     if(clickCount < 3){
        
           if(clickCount === 1){
             firstCard = curCard.parentNode.dataset.name;
             curCard.parentNode.classList.add('card_selected');
           }else{
             secondCard = curCard.parentNode.dataset.name;
             curCard.parentNode.classList.add("card_selected");
           }

           if(firstCard !== "" && secondCard !== ""){
            if(firstCard === secondCard){
            //   curCard.classList.add("card_match")

              setTimeout(() => {
                card_matches()
                resetGame()
              }, 1000);

              
            }else{
                setTimeout(() => {
                    resetGame()
                  }, 1000);
           }
        }
 
        }
 
   if(curCard.id === "card-section"){
     return false;
   }
  })

// Step 1 to add the Card
for(let i = 0; i<shuffledChild.length; i++){
    const childDiv = document.createElement( "div");
    childDiv.classList.add("card")
    childDiv.dataset.name = shuffledChild[i].name;
    childDiv.style.backgroundImage = `url(${shuffledChild[i].img})`;

    const front_div = document.createElement('div');
    front_div.classList.add('front-card');

    const back_div = document.createElement('div');
    back_div.classList.add('back-card');

    back_div.style.backgroundImage = `url(${shuffledChild[i].img})`;

    parentDiv.appendChild(childDiv);

    childDiv.appendChild(front_div);
    childDiv.appendChild(back_div);
}

