// ! Get the ID from the URL
const recipeId = location.hash.substring(1);

// ! Load the groceries array
const recipes = loadRecipes();

// ! Find the ID from grocery array and see if it matchs it
const recipe = recipes.find(recipe => {
  return recipe.id === recipeId;
});

// ! If item is undefined, return user back to the homepage
if (!recipe) {
  location.assign("index.html");
}

// ! Wire up the title and body elements
const title = document.querySelector("#title-input");
const body = document.querySelector("#body-input");

// ! Default title and body when the page initially loads
title.value = recipe.title;
body.value = recipe.body;

// ! Edit title and save groceries array
title.addEventListener("input", e => {
  recipe.title = e.target.value;

  saveRecipes(recipes);
});

// ! Edit textarea and save the groceries array
body.addEventListener("input", e => {
  //Set grocery.body to whatever value is in the textarea
  recipe.body = e.target.value;
  //Save to localStorage to update the groceries array
  saveRecipes(recipes);
});
// ! Render ingredients items
renderIngredients(recipe);

// ! Ingredient input field
const ingredientInput = document.querySelector("#ingredient");
const addIngredient = document.querySelector("#add_ingredient");
ingredientInput.addEventListener("keyup", e => {
 
  const input = ingredientInput.value;
  if (e.keyCode === 13) {
    recipe.ingredients.push({
      name: input,
      haveIt: false
    });
    saveRecipes(recipes);

  renderIngredients(recipe);

  ingredientInput.value = "";
  }


  
});

// ! Delete button
document.querySelector('#delete-button').addEventListener('click', (e) => {
  
  
    const findRecipe = recipes.findIndex((x) => {
        console.log(x.id === recipeId)
        return x.id === recipeId
    })
    console.log(findRecipe)
    if (findRecipe > -1) {
      console.log('hello')
        recipes.splice(findRecipe, 1)
        

    
    }
    
    saveRecipes(recipes)
    location.assign("index.html");
})

// ! Home button to return to homepage 
document.querySelector('#home-button').addEventListener('click', () => {
    //   
    location.assign("index.html");
})

