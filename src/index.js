import {createRecipe , fetchAllRecipes , removeAllRecipes} from './utils/recipe-manager'
import {renderRecipes} from './utils/recipe-home-dom'

const init = () => {
    let recipes = fetchAllRecipes()
    renderRecipes(recipes)
}

document.querySelector('#new-recipe-button-id').addEventListener('click' , (event) => {
    const recipeId = createRecipe()
    renderRecipes(fetchAllRecipes())
    location.assign(`/edit-recipe.html#${recipeId}`)
})

document.querySelector('#delete-all-button-id').addEventListener('click', (event) => {
    removeAllRecipes()
    renderRecipes(fetchAllRecipes())
})

document.querySelector('#search-input-id').addEventListener('input' , (event)=> {
    const searchText = event.target.value
    if(searchText === ''){renderRecipes(fetchAllRecipes())}
    else {
        let recipes = fetchAllRecipes()
        renderRecipes(recipes.filter(recipe => recipe.title.toLowerCase().includes(searchText.toLowerCase())))
    }
})

window.addEventListener('storage' , (event) => {
   const newRecipeData = event.newValue
   const recipes = JSON.parse(newRecipeData)
   
   renderRecipes(recipes)
})

init()

