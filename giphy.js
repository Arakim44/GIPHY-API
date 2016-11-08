$(document).ready(function(){

var animal=['dog','cat','bird','snake','otter','wolf','owl','rat'];

for (i=0; i < animal.length; i++){
  button = document.createElement("BUTTON");
  button.textContent = animal[i];
  button.className = "btn-success";
  //setting bytton data attribute
  button.setAttribute("data-animal",animal[i]);
  document.getElementById('buttonView').appendChild(button);
}

$('button').on('click',function(){
  var animal = $(this).data('animal');
  var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=dc6zaTOxFJmzC&limit=10";

  $.ajax({
         url: queryURL,
         method:'GET',
  })
  .done(function(resp){
    console.log(resp);
    var results = resp.data;
    for (var i =0; i< results.length; i++){
      var animalDiv = $('<div class="item">');
      var rating = results[i].rating;
      var p = $('<p>').text("Rating: "+rating);
      var animalImge = $('<img>');
      animalImge.attr('src',results[i].images.fixed_height.url);
      animalDiv.append(p);
      animalDiv.append(animalImge);

      $('#animalView').prepend(animalDiv);

    }
  });


});








});
