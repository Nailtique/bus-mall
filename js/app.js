'use strict';


let leftImageElement = document.getElementById('left-image');
let rightImageElement = document.getElementById('right-image');
let middleImageElement = document.getElementById('middle-image')


let leftIndex; 
let rightIndex;
let middleIndex;

let rounds = 5;

let countsClick = 0;


function productImage(name,source){
  this.name = name;
  this.source = source;
  this.votes = 0;
  this.shown = 0;
  productImage.allProducts.push(this);
  // each instance ( object) will be pushed to the array ( all of them will be there) we render the four
}

productImage.allProducts = [];

new productImage('bag','../img/bag.jpg');
new productImage('banana','../img/banana.jpg');
new productImage('bathroom','../img/bathroom.jpg'); 
new productImage('boots','../img/boots.jpg'); 
new productImage('breakfast','../img/breakfast.jpg');
new productImage('bubblegum','../img/bubblegum.jpg');
new productImage('chair','../img/chair.jpg');
new productImage('cthulhu','../img/cthulhu.jpg'); 
new productImage('wine-glass', '../img/wine-glass.jpg'); 
new productImage('dragon','../img/dragon.jpg');
new productImage('pen','../pen/bag.jpg');
new productImage('pet-sweep','../img/pet-sweep.jpg');
new productImage('scissors','../img/scissors.jpg');
new productImage('seeep','../img/sweep.png');
new productImage('tauntaun','../img/tautaun.jpg');
new productImage('unicorn','../img/unicorn.jpg');
new productImage('usb','../img/usb.gif');
new productImage('water-can','../img/water-can.jpg');
new productImage('dog-duck','../img/dog-duck.jpg');

//console.log (productImage.allProducts);

function indexRandom()
{
  leftIndex = generateRandomIndex(); 
  rightIndex = generateRandomIndex(); 
  middleIndex = generateRandomIndex(); 

return leftIndex,rightIndex,middleIndex;

let leftpreviousimage 
let rightpreviousimage
let middlepreviousimage


}
  function displayThreeImages()
  
  {

  // we write this to make sure that no three images will be for displayed at the same time. 
 

  while (leftIndex === rightIndex || leftIndex === middleIndex || rightIndex === middleIndex || leftIndex === leftpreviousimage|| rightIndex === middleIndex ||| ) { 


  leftIndex = generateRandomIndex(); 
  rightIndex = generateRandomIndex(); 
  middleIndex = generateRandomIndex(); 

  

  
  }
console.log(leftIndex,rightIndex,middleIndex)


leftpreviousimage = leftIndex;
rightpreviousimage = rightIndex;
middlepreviousimage = middleIndex;


  leftImageElement.setAttribute('src',productImage.allProducts[leftIndex].source);
  rightImageElement.setAttribute('src',productImage.allProducts[rightIndex].source);
  middleImageElement.setAttribute('src',productImage.allProducts[middleIndex].source);

}
displayThreeImages();




function generateRandomIndex(){
  let randomIndex = Math.floor(Math.random() * productImage.allProducts.length);
  return randomIndex;                
                
}


  leftImageElement.addEventListener('click',handleClicking);
 rightImageElement.addEventListener('click',handleClicking);
 middleImageElement.addEventListener('click',handleClicking);


function handleClicking(event)
{

    countsClick++;
    

    console.log(event.target.id);
    if (rounds >= countsClick){
        
        if(event.target.id === 'left-image'){
          productImage.allProducts[leftIndex].votes++;
          
        }else if(event.target.id ==='right-image'){
            productImage.allProducts[rightIndex].votes++;

          }else if(event.target.id ==='middle-image'){
            productImage.allProducts[middleIndex].votes++;
        }
        console.log('string')
        displayThreeImages()

    }else{
     // console.log(productImage.allProducts);

    gettingList();
    leftImageElement.removeEventListener('click',handleClicking);
    rightImageElement.removeEventListener('click',handleClicking);
    middleImageElement.removeEventListener('click',handleClicking);

    }

  }


function gettingList()
{
  let ul = document.getElementById('unList');
  for(let i = 0 ; i <productImage.allProducts.length; i++ ){
    let li = document.createElement('li');
    ul.appendChild(li);
    li.textContent = `${productImage.allProducts[i].name} has ${productImage.allProducts[i].votes} Votes`;
  }

}
