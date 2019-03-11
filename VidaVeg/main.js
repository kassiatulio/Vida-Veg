const render = (selector, content) => {
  const parent = document.querySelector(selector)

  parent.insertAdjacentHTML('beforeBegin', content)
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

const recipes = [
  {
    url: "./arroz_integral_refrescante.html",
    image: "Images/arroz-integral-refrescante.jpg",
    title: "Meu primeiro amor",
  },
  {
    url: "./arroz_integral_refrescante.html",
    image: "Images/arroz-integral-refrescante.jpg",
    title: "Meu primeiro amor 2",
  },
  {
    url: "./arroz_integral_refrescante.html",
    image: "Images/arroz-integral-refrescante.jpg",
    title: "Meu primeiro amor 3",
  },
]

for (let i = 0; i < recipes.length; i++) {
  const recipe = recipes[i]
  
  render(".row", renderRecipe(recipe))
}