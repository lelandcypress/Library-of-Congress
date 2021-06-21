<<<<<<< HEAD
window.onload = function () {
=======
var beefEl = document.getElementById("beefbtn");
var chickenEl = document.getElementById("chickenbtn");
var fishEl = document.getElementById("fishbtn");
var porkEl = document.getElementById("porkbtn");
var menuChoice = ["beef", "chicken", "fish", "pork"];
>>>>>>> main

// choose protein button event listeners//
var meat = document.getElementsByClassName("meat-button");
for (var i = 0; i < meat.length; i++) {
  (function (index) {
    meat[index].onclick = function () {
      userChoice = menuChoice[index];
      //clears inner HTML to prevent search items from stacking//
      $("#directions").html("");
      $("#ingredients").html("");
<<<<<<< HEAD
   

// meal api fetch request
=======
      //First fetch request to Spoonacular API, searches by ingredient name//
>>>>>>> main
      var getUrl =
        "https://api.spoonacular.com/recipes/findByIngredients?apiKey=8cc43afd180940aba414f655f8a71f64&ingredients=" +
        userChoice +
        "&number=20";
      fetch(getUrl)
        .then(function (recipe) {
          return recipe.json();
        })
<<<<<<< HEAD

// randomly display meals based on meat choice
=======
        //returns a random option from the returned recipes, renders recipe title and picture assigns recipe ID//
>>>>>>> main
        .then(function (recipe) {
          var random = Math.floor(Math.random() * 20);
          var returnedRecipe = recipe[random];
          var recipeID = returnedRecipe.id;
          var recipeImage = returnedRecipe.image;
          $("#recipe-title").text(returnedRecipe.title);
          $("#recipe-picture").attr("src", recipeImage);
<<<<<<< HEAD
          
// getIngredientList(recipeID);
=======
          //Second fetch request returns ingredient list and recipe directions.//
>>>>>>> main
          var getrecipeUrl =
            "https://api.spoonacular.com/recipes/" +
            recipeID +
            "/information?apiKey=8cc43afd180940aba414f655f8a71f64&includeNutrition=true";
          fetch(getrecipeUrl)
            .then(function (response) {
              return response.json();
            })
            .then(function (data) {
              var instructionsArray = data.analyzedInstructions[0].steps;
              for (var i = 0; i < instructionsArray.length; i++) {
                $("#directions").append(
                  "<li>" + instructionsArray[i].step + "</li>"
                );
              }
              for (var i = 0; i < data.extendedIngredients.length; i++) {
                var ingredients = data.extendedIngredients[i].original;
                $("#ingredients").append("<li>"  + ingredients + "</li>");
              }
            });
        });
    };
  })(i);
}
<<<<<<< HEAD

var menuChoice = ["beef", "chicken", "fish", "pork"];


=======
//Drink Buttons Event Listeners//
>>>>>>> main
$(".drink-button").click(function (event) {
  event.stopPropagation();
  userChoice = event.target;
  $("#drink-directions").html("");
  $("#drink-ingredients").html("");
  $("#drink-container").show();
  $("#beer-container").hide();
  getDrink(userChoice.innerHTML);
});
//Had to build out seperate listener since beer comes from a different API than the cocktails//
$("#beerBtn").click(function (event) {
  event.stopPropagation();
  $("#beer-container").show();
  $("#drink-container").hide();
  getBeer();
});
<<<<<<< HEAD



function getBeer() {
  var getUrl = "https://api.punkapi.com/v2/beers?food/random";
  fetch(getUrl)
    .then(function (beer) {
      return beer.json();
    })
    .then(function (beer) {
      var random = Math.floor(Math.random() * 20);
      var chosenBeer = beer[random];
      $("#beer-picture").attr("src", chosenBeer.image_url);
      $("#beer-title").text(chosenBeer.name);
      $("#beer-tag").text(chosenBeer.tagline);
      $("#beer-abv").text("ABV: " + chosenBeer.abv);
      $("#beer-description").text("Description: " + chosenBeer.description);
      console.log(chosenBeer.food_pairing[1]);
      for (var i = 0; i < chosenBeer.food_pairing.length; i++) {
        $("#beer-pairing").append(
          "<li>" + chosenBeer.food_pairing[i] + "</li>"
        )
      }
    })
}};
=======
//Note: all cocktail and beer fucitions found on drinks.js
>>>>>>> main
