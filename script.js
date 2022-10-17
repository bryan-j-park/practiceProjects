// catching Pokemon!! // 
var caught = 0;
var numberCaught = document.querySelector('#pokemonCaughtBox');

function caughtPokemon(element){
  element.remove();
  alert('You Caught ' + element.id + '!');
  caught++;
  numberCaught.innerText = caught;
}

function runAwayPokemon(element){
  element.remove();
  alert(`Aww... ${element.id} broke out... ${element.id} ran away...`);
}