import {createRecipe , fetchAllRecipes , removeAllRecipes} from './utils/recipe-manager'
import {renderRecipes} from './utils/recipe-home-dom'

const init = () => {
    let recipes = fetchAllRecipes()
    renderRecipes(recipes)
}

document.querySelector('#new-recipe-button-id').addEventListener('click' , (event) => {
    const recipeId = createRecipe()
    renderRecipes(fetchAllRecipes())
})

document.querySelector('#delete-all-button-id').addEventListener('click', (event) => {
    removeAllRecipes()
    renderRecipes(fetchAllRecipes())
})

init()

