import {recipes} from './recipes';

const render = (selector, content) => {
  const parent = document.querySelector(selector)

  parent.innerHTML += content
}

const renderRecipe = (recipe) => {
  return `
    <div class="recipe">
      <a href="${recipe.url}">
        <div class="recipe-image">
          <img src="${recipe.image}">
        </div>
        <div class="recipe-title">
          <h3>${recipe.title}</h3>
        </div>
      </a>
    </div>					
    </div>
    `
}

for (let i = 0; i < recipes.length; i++) {
  const recipe = recipes[i]
  
  render(".row", renderRecipe(recipe))
}