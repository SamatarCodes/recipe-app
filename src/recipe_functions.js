// ! Save Groceries to localStorage
const saveRecipes = recipes => {
  localStorage.setItem("recipes", JSON.stringify(recipes));
};

// ! Load groceries array from localStorage
const loadRecipes = () => {
  const recipeJSON = localStorage.getItem("recipes");
  return recipeJSON !== null ? JSON.parse(recipeJSON) : [];
};

// ! Add grocery
const createRecipe = (recipes, id) => {
  recipes.push({
    id,
    title: "untitled",
    body: "",
    ingredients: []
  });
};

// ! Render Recipe

const renderList = (recipes, filters) => {
  const filteredList = recipes.filter(recipe => {
    return recipe.title
      .toLowerCase()
      .includes(filters.searchText.toLowerCase());
  });

  // ! Clear the dom
  document.querySelector(".sub-card").innerHTML = "";

  filteredList.forEach(recipe => {
    // ! Show it to the dom
    // main div
    const div = document.querySelector(".sub-card");
    // sub div
    const divP = document.createElement("div");
    // ancher div
    const a = document.createElement("a");
    const pIngredient = document.createElement("p");

    //   SubDiv attribute
    divP.setAttribute("id", "text-div");
    
    //  Ingredient text attribute
    pIngredient.setAttribute('id', 'ingredient-text')

    // * Anchor tag
    divP.appendChild(a);
    a.setAttribute("href", `edit.html#${recipe.id}`);
    a.setAttribute("id", "title-text");

    // * If anchor text is empty
    if (recipe.title === "") {
      a.textContent = "Untitled Recipe";
    } else {
      a.textContent = recipe.title;
    }

    const filteredIngredients = recipe.ingredients.filter(ingredient => {
      return ingredient.haveIt === true;
    });

    console.log(recipe.ingredients.length);
    if (
      filteredIngredients.length >= 1 &&
      filteredIngredients.length < recipe.ingredients.length
    ) {
      pIngredient.textContent = "You have some of the ingredients";
    } else if (
      filteredIngredients.length <= 0 &&
      recipe.ingredients.length >= 1
    ) {
      pIngredient.textContent = "You have none of the ingredients";
    } else if (
      filteredIngredients.length === recipe.ingredients.length &&
      recipe.ingredients.length >= 1
    ) {
      pIngredient.textContent = "You have all the ingredients";
    } else if (recipe.ingredients.length === 0) {
      pIngredient.textContent = `You haven't added any ingredient to this recipe`;
    }

    divP.appendChild(pIngredient);
    div.appendChild(divP);
    // div.appendChild(pIngredient);
  });
};

// ! Render Ingredients list
const renderIngredients = recipe => {
  console.log(recipe.ingredients);
  const div = document.querySelector(".list_ingredients");

  // ! Clear the DOM when it first render
  div.innerHTML = "";

  // ! Loop

  recipe.ingredients.forEach(reci => {
    const ingredientDiv = document.createElement("div");
    const pElement = document.createElement("span");
    const removeButton = document.createElement("i");
    const checkBox = document.createElement("input");

    // Add attribute to the DIV
    ingredientDiv.setAttribute('id', 'ingredient-div')

    // ! Setup the checkbox
    checkBox.setAttribute("type", "checkbox");
    checkBox.setAttribute('id', 'check')
    ingredientDiv.appendChild(checkBox);

    // ! CheckBox value = recipe.haveIt value
    checkBox.checked = reci.haveIt;

    // ! Wire up checkbox when user selects it
    checkBox.addEventListener("click", e => {
      reci.haveIt = e.target.checked;
      saveRecipes(recipes);
    });

    // ! Setup the ingredient title
    pElement.setAttribute('id', 'ingredient-span')
    pElement.textContent = reci.name;
    ingredientDiv.appendChild(pElement);


    // ! Setup the remove button
    // removeButton.textContent = "remove";
    removeButton.setAttribute('id', 'removeButton')
    removeButton.innerHTML = `<i class="fas fa-trash-alt"></i>`
    ingredientDiv.appendChild(removeButton);
    removeButton.addEventListener("click", e => {
      const recipeIndex = recipe.ingredients.findIndex(ing => {
        return ing.name === reci.name;
      });

      if (recipeIndex > -1) {
        recipe.ingredients.splice(recipeIndex, 1);
      }

      saveRecipes(recipes);
      renderIngredients(recipe);

      //  })
    });

    // ! Append
    div.appendChild(ingredientDiv);
  });
};
