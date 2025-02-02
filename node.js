const counter = document.querySelector(`.counter`)
let newCounter = 0
const textCounter = document.querySelector(`.counter-text`)

const shopSto = document.querySelector(`.one`)
const shopTristo = document.querySelector(`.two`)
const shopDveKa = document.querySelector(`.three`)
const shopPyatKa = document.querySelector(`.four`)

const img = document.querySelector(`.money-one`)
const imgTwo = document.querySelector(`.money-two`)
const imgTree = document.querySelector(`.money-three`)
const imgTFour = document.querySelector(`.money-four`)

shopSto.addEventListener("click", function(){

  if (shopSto.classList.contains('active')) {
    newCounter += 100
    alert(`Уже куплено`)
 } 

  if (newCounter >= 100) {
    shopSto.className += ' active';
    newCounter -= 100
    textCounter.textContent = newCounter

    img.style.display="block";

  } else{
    alert(`Недостаточно`)
  }

});




shopTristo.addEventListener("click", function(){

  if (shopTristo.classList.contains('active')) {
    newCounter += 500
    alert(`Уже куплено`)
  } 
  
  if (newCounter >= 500) {
    shopTristo.className += ' active';
    shopSto.className += ' active';
    newCounter -= 500
    textCounter.textContent = newCounter

    imgTwo.style.display="block";
    img.style.display="block";

  } else{
    alert(`Недостаточно`)
  }

});


shopDveKa.addEventListener("click", function(){

  if (shopDveKa.classList.contains('active')) {
    newCounter += 100
    alert(`Уже куплено`)
 } 

  if (newCounter >= 2000) {
    shopDveKa.className += ' active';
    shopTristo.className += ' active';
    shopSto.className += ' active';
    newCounter -= 2000
    textCounter.textContent = newCounter

    imgTwo.style.display="block";
    img.style.display="block";
    imgTree.style.display="block";

  } else{
    alert(`Недостаточно`)
  }

});


shopPyatKa.addEventListener("click", function(){

  if (shopPyatKa.classList.contains('active')) {
    newCounter += 5000
    alert(`Уже куплено`)
 } 

  if (newCounter >= 5000) {
    shopDveKa.className += ' active';
    shopTristo.className += ' active';
    shopSto.className += ' active';
    shopPyatKa.className += ' active';
    newCounter -= 5000
    textCounter.textContent = newCounter

    imgTwo.style.display="block";
    img.style.display="block";
    imgTree.style.display="block";
    imgTFour.style.display="block";

  } else{
    alert(`Недостаточно`)
  }

});




function sto (){
  newCounter += 2
  textCounter.textContent = newCounter
}

function tristo (){
  newCounter += 3
  textCounter.textContent = newCounter
}

function DveKa (){
  newCounter += 5
  textCounter.textContent = newCounter
}

function PyatKa (){
  newCounter += 100
  textCounter.textContent = newCounter
}


counter.addEventListener("click", function(){

  if (shopPyatKa.classList.contains('active')) {
    return PyatKa ()}
    else
  if (shopDveKa.classList.contains('active')) {
    return DveKa ()}
    else
  if (shopTristo.classList.contains('active')) {
    return tristo ()}
    else{
  if (shopSto.classList.contains('active')) {
    return sto ()
 } else{
   newCounter++
   textCounter.textContent = newCounter
 }
}
});
