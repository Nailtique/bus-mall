'use strict';


let leftImageElement = document.getElementById('leftimage');
let rightImageElement = document.getElementById('rightimage');
let middleImageElement = document.getElementById('middleimage')


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
 
console.log(productImage.allproducts);

function indexRandom()
{
  leftIndex = generateRandomIndex(); 
  rightIndex = generateRandomIndex(); 
  middleIndex = generateRandomIndex(); 

return leftIndex,rightIndex,middleIndex;

}
  function displayThreeImages(){

  
  // we write this to make sure that no three images will be for displayed at the same time. 
 
  while (leftIndex === rightIndex || leftIndex === middleIndex || rightIndex === middleIndex) {
  indexRandom();
  }


  leftImageElement.setAttribute('src',productImage.allProducts[leftIndex].source);
  rightImageElement.src = productImage.allProducts[rightIndex].source;
  middleImageElement.src = productImage.allProducts[middleIndex].source;

}
displayThreeImages();



function generateRandomIndex(){
  let randomIndex = Math.floor(Math.random() * productImage.allProducts.length);
  return randomIndex;                
                
}


// leftImageElement.addEventListener('click',handleClicking);
/*
rightImageElement.addEventListener('click',handleClicking);
middleImageElement.addEventListener('click',handleClicking);


function handleClicking(event)
{

    countsClick++;
    

    console.log(event.target.id);
    if(rounds >= countsClick){
        
        if(event.target.id === 'leftimage'){
          productImage.allProducts[leftIndex].votes++;
          
        }else if(event.target.id ==='rightimage'){
            productImage.allProducts[rightIndex].votes++;

          }else if(event.target.id ==='middleimage'){
            productImage.allProducts[rightIndex].votes++;
        }
        displayTwoImages();
    }else{
      console.log(productImage.allProductts);

    gettingList();
    leftImageElement.removeEventListener('click',handleClicking);
    rightImageElement.removeEventListener('click',handleClicking);
    middleImageElement.removeEventListener('click',handleClicking);

    }

  }


function gettingList()
{
  let ul = document.getElementById('unList');
  for(let i = 0 ; i <productImage.allproducts.length; i++ ){
    let li = document.createElement('li');
    ul.appendChild(li);
    li.textContent = `${productImage.allProducts[i].name} has ${productImage.allProducts[i].votes} Votes`;
  }

}
*/