var count = 0
var totalMatches = document.querySelector('#totalMatches')
var suitName = document.querySelector('#suitName')
var randomAce = document.querySelector('#randomAce')
var randomButton = document.querySelector('#randomButton')
var spades = 'img/aceOfSpades.png'
var hearts = 'img/aceOfHearts.png'
var clubs = 'img/aceOfClubs.png'
var diamonds = 'img/aceOfDiamonds.png'
var arrayOfAces = [hearts, spades, diamonds, clubs]

function randomAceGenerated(){
  var pick = Math.random();
  var randomPick = arrayOfAces[Math.floor(pick * arrayOfAces.length)];
  randomAce.src = randomPick
  if(arrayOfAces[0] == randomPick){
    suitName.innerText = 'Hearts';
  }
  else if(arrayOfAces[1] == randomPick){
    suitName.innerText = 'Spades'
  }
  else if(arrayOfAces[2] == randomPick){
    suitName.innerText = 'Diamonds'
  }
  else{
    suitName.innerText = 'Clubs';
  }
}

function matchClubs(){
  if(suitName.innerText == 'Clubs'){
    alert('CORRECT!');
    count++;
    totalMatches.innerText = count;
  }
  else{
    alert('INCORRECT!')
  }
  randomAce.src = 'img/backCard.png'
  suitName.innerText = 'Press the Random Button'
}

function matchHearts(){
  if(suitName.innerText == 'Hearts'){
    alert('CORRECT!');
    count++;
    totalMatches.innerText = count;
  }
  else{
    alert('INCORRECT!')
  }
  randomAce.src = 'img/backCard.png'
  suitName.innerText = 'Press the Random Button'
}

function matchSpades(){
  if(suitName.innerText == 'Spades'){
    alert('CORRECT!');
    count++;
    totalMatches.innerText = count;
  }
  else{
    alert('INCORRECT!')
  }
  randomAce.src = 'img/backCard.png'
  suitName.innerText = 'Press the Random Button'
}

function matchDiamonds(){
  if(suitName.innerText == 'Diamonds'){
    alert('CORRECT!');
    count++;
    totalMatches.innerText = count;
  }
  else{
    alert('INCORRECT!')
  }
  randomAce.src = 'img/backCard.png'
  suitName.innerText = 'Press the Random Button'
}