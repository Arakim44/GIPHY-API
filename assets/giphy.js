$(document).ready(function(){

var animal=['dachshund','corgi','harp seal','german shapered dog','owl','snake','otter','wolf','rat'];



function renderButtons(){

      $('#buttonView').empty();

      for (i=0; i < animal.length; i++){
        button = document.createElement("BUTTON");
        button.textContent = animal[i];
        button.className = "btn-success";
        //setting bytton data attribute
        button.setAttribute("data-animal",animal[i]);
        $('#buttonView').append(button);
      }

}

//
// $('button').on('click',function(){

function displayGif(){

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
      //this is fixed src. so next thing I should do is to add data-still : url and data-play: url in different data custum attribute**

      animalImge.attr('src',results[i].images.fixed_height_still.url);
      animalImge.attr('data-still',results[i].images.fixed_height_still.url);
      animalImge.attr('data-animate',results[i].images.fixed_height.url);
      animalImge.attr('class','gif');

      animalDiv.append(p);
      animalDiv.append(animalImge);

      $('#animalView').prepend(animalDiv);
    }

//why did this have to go inside?
    $('.gif').on('click',function(){

        var state = $(this).attr('data-state');

        if (state == 'still'){
          $(this).attr('src',$(this).data('animate'));
          $(this).attr('data-state','animate');
        }else{
          $(this).attr('src',$(this).data('still'));
          $(this).attr('data-state','still');
        }

    });





  });

}

//});//button on click ends here

//
$(document).on('click','.btn-success',displayGif);



$('#addAnimal').on('click',function(){
  var animalInput = $('#animal-input').val().trim();

  animal.push(animalInput);

  console.log(animal);

  $('#animal-input').val("");

  renderButtons();

  return false;
});



renderButtons();




});
