// Your code here
let markerX = "https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-x.svg"
let markerO = "https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-o.svg"
let clickCounter = 1;
//track marker
const matrix = [
   ['n', 'n', 'n'],
   ['n', 'n', 'n'],
   ['n', 'n', 'n']
 ]
//if marker === marker x add id to div with value of markerx

let marker = markerX;
const mark = function(){
   if(clickCounter % 2){
      marker = markerO;
   } else {
      marker = markerX;
   }
   clickCounter ++;
};

////
// const attSetter = function (target) {
// if (!target.getAttribute('id')) {
//       if (marker = markerX) {
//          target.setAttribute('id', "x")
//       }
//       else {
//          target.setAttribute('id', "O")
//       }
//    }
//    }
// /////

window.onload = () => {
   const gameSquare = document.getElementById("gameboard");
   gameSquare.addEventListener('click', e => {
      //let nodeList = e.target.children;

      let targetSquare = e.target.firstElementChild;
      // attSetter(e.target)
      console.log(targetSquare);
      //if counter modulo = 0 marker is x
         targetSquare.setAttribute("src", marker);
         mark();
         //could potentially show user a message saying they can't select that cell since it is already in use
         matrixAdjuster(targetSquare.id, matrix)
         console.log(matrix)

      //future renditions to catch error
   });
};

const  matrixAdjuster = function(id, matrix) {
   // square-0
   let idNum = parseInt(id.replace(/\D/g,''))
   const matrixRow = Math.floor(idNum/3);
   const matrixCol = (idNum%3);
   matrix[matrixRow][matrixCol] = clickCounter%2
   console.log(matrix)
}

const rowChecker = function (matrix) {
   matrix.forEach(row => potentialWinCheck(row))
}

const colChecker = function (matrix) {

   for (let i = 0; i < matrix.length; i++) {
      let checkArr = []
      for (let j=0; j < matrix.length; j++) {
         checkArr.push(matrix[j][i])
         if (checkArr.length === 3) {
            potentialWinCheck(checkArr);
         }
      }
   }
}
const potentialWinCheck = function (array) {
   if (!row.includes('n')) {
      if (!row.includes(1)) {
         // X wins
      }
      else if (!row.includes(0)) {
         // O wins
      }
   }

}
const matrix = [
   ['n', 'n', 'n'],
   ['n', 'n', 'n'],
   ['n', 'n', 'n']
 ]
