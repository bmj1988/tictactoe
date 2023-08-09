// Your code here
let marker = "https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-x.svg"
let clickCounter = 1;
const mark = function(){
   if(clickCounter % 2){
      marker = "https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-o.svg"
   } else {
      marker = "https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-x.svg"
   }
   clickCounter ++;
};

window.onload = () => {
   const gameSquare = document.getElementById("gameboard");
   gameSquare.addEventListener('click', e => {
      //let nodeList = e.target.children;
      
      let targetSquare = e.target.firstElementChild;
      console.log(targetSquare);
      //if counter modulo = 0 marker is x
         targetSquare.setAttribute("src", marker);
         mark(); 
         //could potentially show user a message saying they can't select that cell since it is already in use     
      

      //future renditions to catch error
   });
};
