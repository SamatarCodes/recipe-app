let recipes = loadRecipes();

// const lists = [
//   {
//     title: "Cant",
//     Author: "David Goggins"
//   },
//   {
//     title: "Habits",
//     Author: "James Clear"
//   }
// ];

const filters = {
  searchText: ""
};

renderList(recipes, filters);

// ! Wire up the add recipe button
const addButton = document.querySelector("#add-recipe");

addButton.addEventListener("click", e => {
  const id = uuidv4();
  createRecipe(recipes, id);
  // After you add grocery, save it to localStorage
  saveRecipes(recipes);
  location.assign(`edit.html#${id}`);
});

// ! Wire up the search text
document.querySelector("#search").addEventListener("input", e => {
  // When search value changes, we're going to update filters and call the function again
  filters.searchText = e.target.value;
  renderList(recipes, filters);
});
