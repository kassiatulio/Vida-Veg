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
    url: "./panqueca-integral.html",
    image: "Images/panqueca-integral.jpg",
    title: "Panqueca integral",
  },
  {
    url: "./mamao-com-granola.html",
    image: "Images/mamao-com-granola.jpg",
    title: "Mamão com granola",
  },
  {
    url: "./açai-na-tigela.html",
    image: "Images/açai-na-tigela.jpg",
    title: "Açaí na tigela",
  },
  {
    url: "./espaguete-de-abobrinha.html",
    image: "Images/espaguete-de-abobrinha.jpg",
    title: "Espaguete de abobrinha",
  },
  {
    url: "./arroz-integral-refrescante.html",
    image: "Images/arroz-integral-refrescante.jpg",
    title: "Arroz integral refrescante",
  },
  {
    url: "./batata-rostie-recheada.html",
    image: "Images/batata-rosti-recheada.jpg",
    title: "Batata rostie recheada",
  },
  {
    url: "./sopa-de-espinafre.html",
    image: "Images/sopa-de-espinafre.jpg",
    title: "Sopa de espinafre",
  },
  {
    url: "./salada-de-abobrinha.html",
    image: "Images/salada-de-abobrinha.jpg",
    title: "Salada de abobrinha",
  },
  {
    url: "./mingau-de-aveia-e-banana.html",
    image: "Images/mingau-de-aveia-e-banana.jpg",
    title: "Mingau de aveia e Banana",
  },
]

for (let i = 0; i < recipes.length; i++) {
  const recipe = recipes[i]
  
  render(".row", renderRecipe(recipe))
}