const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

const fetchRecipe = async function () {
  try {
    const response = await fetch(
      // 'https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886',
      'https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bce0d'
    );

    const data = await response.json();

    if (!response.ok) throw new Error(`${data.message} (${response.status})`);

    let { recipe } = await data.data;

    recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      soureUrl: recipe.source_url,
      image: recipe.image_url,
      servings: recipe.servings,
      cookingTime: recipe.cooking_time,
      ingredients: recipe.ingredients,
    };
    console.log(response, recipe);
  } catch (err) {
    new Error(console.error(err.message));
  }
};

fetchRecipe();
