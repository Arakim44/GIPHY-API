$(document).ready(function(){

var animal=['dog','cat','bird','snake','stag','doe','otter','werewolf','owl','rat'];

for (i=0; i < animal.length; i++){
  button = document.createElement("BUTTON");
  button.textContent = animal[i];
  document.getElementById('buttonView').appendChild(button);
}









// var buttonTitles = ["up", "down", "left", "right"];
// var i, button;
// for (i = 0; i < buttonTitles.length; i++) {
//   button = document.createElement("BUTTON");
//   button.textContent = buttonTitles[i];
//   document.body.appendChild(button);
// }



});
